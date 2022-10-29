import React, { useReducer } from 'react';

import {
    PlayDiv,
    CurrentCards,
    CardBack,
    Placeholder,
    CardContainer,
} from './Play.styles';
import { ScoreCard } from '../../../components/ScoreCard';
import { Card } from '../../../components/Card';
import { Settings } from '../../../components/Settings';

import { useDispatch, useSelector } from 'react-redux';
import { headerSelector } from '../../../store/Header.slice';
import {
    setPlayerCards,
    setOpponentCards,
    setCurrentPlayerCard,
    setCurrentOpponentCard,
    setPopulated,
    setDeckSize,
    setGameOver,
    resetGameState,
    cardsSelector,
    cardWin,
    cardLoss,
    cardDraw,
} from '../../../store/Cards.slice';

export const Play = () => {
    let players = [];
    // initiate local state management
    const [startDisabled, setStartDisabled] = useReducer(
        (startDisabled) => !startDisabled,
        false
    );
    const [resetDisabled, setResetDisabled] = useReducer(
        (resetDisabled) => !resetDisabled,
        true
    );
    const [animate, setAnimate] = useReducer((animate) => !animate, false);

    // initiate global store management
    const dispatch = useDispatch();
    const { fplPlayers } = useSelector(headerSelector);
    const {
        deckSize,
        populated,
        playerCards,
        opponentCards,
        currentPlayerCard,
        currentOpponentCard,
        playerWon,
        gameOver,
    } = useSelector(cardsSelector);

    // build a deck using player data provided by header slice
    const buildDeck = () => {
        const totalPlayers = Object.keys(fplPlayers).length;
        let i = 0;
        while (i < deckSize) {
            let playerKey = Math.floor(Math.random() * totalPlayers);
            let randomPlayer = fplPlayers[playerKey];
            if (
                randomPlayer.total_points >= 5 &&
                players.every((player) => player.code !== randomPlayer.code)
            ) {
                players = [...players, randomPlayer];
                i += 1;
            }
        }
    };
    // change state based on deck prepared above
    const startGame = () => {
        setStartDisabled(); // disable start : function triggers only if start is enabled
        if (gameOver === true) dispatch(setGameOver());
        buildDeck();
        players.map((player, index) => {
            if (index === 0) dispatch(setCurrentPlayerCard(player));
            if (index === 1) dispatch(setCurrentOpponentCard(player));
            if (index > 1) {
                index % 2 === 0
                    ? dispatch(setPlayerCards(player))
                    : dispatch(setOpponentCards(player));
            }
        });
        dispatch(setPopulated());
        if (resetDisabled) setResetDisabled(); // enable reset if disabled
    };
    // reset card slice state branch
    const resetGame = () => {
        setResetDisabled(); // disable reset : function triggers only if reset is enabled
        if (startDisabled) setStartDisabled(); // enable start if disabled
        dispatch(resetGameState());
    };
    // display user input and change deck size in state using the input
    const updateDisplay = (e) => {
        const value = e.target.value;
        e.target.setAttribute('aria-valuenow', e.target.value);
        document.querySelector('output').value = `${e.target.value} Cards`;
        if (value !== deckSize) {
            dispatch(resetGameState());
            dispatch(setDeckSize(parseInt(value)));
        }
        if (startDisabled) setStartDisabled(); // enable start if disabled to render new deck
    };

    const generateStat = (card) => {
        return card.total_points / (card.minutes / 90).toFixed(2);
    };

    const compareStats = (event, playerCard, opponentCard) => {
        // not targeting child span element to get values
        // get player and opponent data from store
        switch (event.currentTarget.id) {
            case 'Points':
                updateCards(playerCard.total_points, opponentCard.total_points);
                break;
            case 'PP90':
                updateCards(
                    generateStat(playerCard),
                    generateStat(opponentCard)
                );
                break;
            case 'Value':
                updateCards(
                    parseFloat(playerCard.value_season),
                    parseFloat(opponentCard.value_season)
                );
                break;
            case 'ICT-rank':
                // rank needs to lower to win
                // updateCards() checks player > opponent (1 > 5 => false)
                // reversing arguments results in checking player < opponent (1 < 5 => true)
                updateCards(
                    opponentCard.ict_index_rank_type,
                    playerCard.ict_index_rank_type
                );
                break;
        }
    };

    const updateCards = (player, opponent) => {
        if (player === opponent)
            dispatch(
                cardDraw(
                    currentPlayerCard,
                    currentOpponentCard,
                    playerCards[0],
                    opponentCards[0],
                    1900
                )
            );
        player > opponent
            ? dispatch(
                  cardWin(
                      currentPlayerCard,
                      currentOpponentCard,
                      playerCards[0],
                      opponentCards[0],
                      1900
                  )
              )
            : dispatch(
                  cardLoss(
                      currentPlayerCard,
                      currentOpponentCard,
                      playerCards[0],
                      opponentCards[0],
                      1900
                  )
              );

        if (playerCards.length === 0 || opponentCards.length === 0) {
            if (startDisabled) setStartDisabled();
        }
    };

    return (
        <PlayDiv>
            <Settings
                start={startGame}
                startActive={startDisabled}
                reset={resetGame}
                resetActive={resetDisabled}
                updateOutput={updateDisplay}
                peekAllowed={!populated}
            />
            {populated === false ? (
                <>
                    <ScoreCard />
                    <CurrentCards id="current">
                        {gameOver === false ? (
                            <Placeholder>Press Start icon to Play</Placeholder>
                        ) : playerWon === 1 ? (
                            <Placeholder>You win. Play Again?</Placeholder>
                        ) : (
                            <Placeholder>You lose. Play Again?</Placeholder>
                        )}
                    </CurrentCards>
                </>
            ) : (
                <>
                    <ScoreCard
                        playerLeft={playerCards.length + 1}
                        opponentLeft={opponentCards.length + 1}
                    />
                    <CurrentCards id="current">
                        <Card
                            player={currentPlayerCard}
                            disabled={false}
                            handleStatClick={(e) => {
                                setAnimate();
                                compareStats(
                                    e,
                                    currentPlayerCard,
                                    currentOpponentCard
                                );
                            }}
                        />
                        <div
                            style={{
                                position: 'relative',
                                perspective: '1000px',
                            }}
                        >
                            <CardBack
                                id="card-back"
                                animate={animate}
                                onAnimationEnd={(e) => {
                                    setAnimate();
                                }}
                            />
                            <Card
                                player={currentOpponentCard}
                                animate={animate}
                                flip={true}
                            />
                        </div>
                    </CurrentCards>
                    <CardContainer id="peek-cards">
                        {playerCards.length !== 0 ? (
                            playerCards.map((player) => (
                                <Card player={player} key={player.code} />
                            ))
                        ) : (
                            <div></div>
                        )}
                    </CardContainer>
                </>
            )}
        </PlayDiv>
    );
};
