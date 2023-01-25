import { FormEvent, MouseEvent, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPlayer } from '../../typings/components';
import {
    PlayDiv,
    CurrentCards,
    CardBack,
    Placeholder,
    CardContainer,
} from './Play.styles';
import { Card, ScoreCard, Settings } from '../../components';
import { headerSelector } from '../../store/Header.slice';
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
} from '../../store/Cards.slice';

interface IState {
    startDisabled: boolean;
    resetDisabled: boolean;
    animate: boolean;
}

const Play = (): JSX.Element => {
    let players: IPlayer[] = [];
    // initiate local state management
    const initialState: IState = {
        startDisabled: false,
        resetDisabled: true,
        animate: false,
    };
    const stateReducer = (
        state: IState,
        newState: Partial<IState>
    ): IState => ({
        ...state,
        ...newState,
    });
    const [state, setState] = useReducer(stateReducer, initialState);

    const { startDisabled, resetDisabled, animate } = state;

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
            const playerKey = Math.floor(Math.random() * totalPlayers);
            const randomPlayer = fplPlayers[playerKey];
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
        setState({ startDisabled: !startDisabled }); // disable start : function triggers only if start is enabled
        if (gameOver === true) dispatch(setGameOver());
        buildDeck();
        players.forEach((player, index) => {
            if (index === 0) dispatch(setCurrentPlayerCard(player));
            if (index === 1) dispatch(setCurrentOpponentCard(player));
            if (index > 1) {
                if (index % 2 === 0) dispatch(setPlayerCards(player));
                else dispatch(setOpponentCards(player));
            }
        });
        dispatch(setPopulated());
        if (resetDisabled) setState({ resetDisabled: !resetDisabled }); // enable reset if disabled
    };
    // reset card slice state branch
    const resetGame = () => {
        setState({ resetDisabled: !resetDisabled }); // disable reset : function triggers only if reset is enabled
        if (startDisabled) setState({ startDisabled: !startDisabled }); // enable start if disabled
        dispatch(resetGameState());
    };
    // display user input and change deck size in state using the input
    const updateDisplay = (e: FormEvent) => {
        const target = e.target as HTMLInputElement;
        const output = document.querySelector('output');
        const { value } = target;
        target.setAttribute('aria-valuenow', value);
        if (output) output.value = `${value} Cards`;
        if (Number(value) !== deckSize) {
            dispatch(resetGameState());
            dispatch(setDeckSize(Number(value)));
        }
        if (startDisabled) setState({ startDisabled: !startDisabled }); // enable start if disabled to render new deck
    };

    const generateStat = (card: IPlayer | Record<string, never>): number =>
        card.total_points / (card.minutes / 90);

    const updateCards = (player: number, opponent: number): void => {
        if (player === opponent) {
            cardDraw(
                currentPlayerCard,
                currentOpponentCard,
                playerCards[0],
                opponentCards[0],
                1900,
                dispatch
            );
            return;
        }
        player > opponent
            ? cardWin(
                  currentPlayerCard,
                  currentOpponentCard,
                  playerCards[0],
                  opponentCards[0],
                  1900,
                  dispatch
              )
            : cardLoss(
                  currentPlayerCard,
                  currentOpponentCard,
                  playerCards[0],
                  opponentCards[0],
                  1900,
                  dispatch
              );

        if (playerCards.length === 0 || opponentCards.length === 0) {
            if (startDisabled) setState({ startDisabled: !startDisabled });
        }
    };

    const compareStats = (
        event: MouseEvent,
        playerCard: IPlayer | Record<string, never>,
        opponentCard: IPlayer | Record<string, never>
    ) => {
        const target = event.currentTarget as HTMLDivElement;
        // not targeting child span element to get values
        // get player and opponent data from store
        switch (target.id) {
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
            default:
                break;
        }
    };

    const renderPlaceHolder = (): JSX.Element => {
        if (gameOver === false) {
            return <Placeholder>Press Start icon to Play</Placeholder>;
        }
        return playerWon === 1 ? (
            <Placeholder>You win. Play Again?</Placeholder>
        ) : (
            <Placeholder>You lose. Play Again?</Placeholder>
        );
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
                    <ScoreCard
                        playerLeft={playerCards.length}
                        opponentLeft={opponentCards.length}
                    />
                    <CurrentCards id="current">
                        {renderPlaceHolder()}
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
                                setState({ animate: !animate });
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
                                onAnimationEnd={() => {
                                    setState({ animate: !animate });
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

export default Play;
