import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import { IPlayer } from '../typings/components';

type CardsSliceState = {
    deckSize: number;
    playerCards: IPlayer[];
    opponentCards: IPlayer[];
    currentPlayerCard: IPlayer | Record<string, never>;
    currentOpponentCard: IPlayer | Record<string, never>;
    populated: boolean;
    gameOver: boolean;
    playerWon: 0 | 1;
};

export const initialState: CardsSliceState = {
    deckSize: 22,
    playerCards: [],
    opponentCards: [],
    currentPlayerCard: {},
    currentOpponentCard: {},
    populated: false,
    gameOver: false,
    playerWon: 0,
};

/* eslint-disable no-param-reassign */

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setDeckSize: (state, { payload }) => {
            state.deckSize = payload;
        },
        setPlayerCards: (state, { payload }) => {
            state.playerCards.push(payload);
        },
        setOpponentCards: (state, { payload }) => {
            state.opponentCards.push(payload);
        },
        setCurrentPlayerCard: (state, { payload }) => {
            state.currentPlayerCard = { ...payload };
        },
        setCurrentOpponentCard: (state, { payload }) => {
            state.currentOpponentCard = { ...payload };
        },
        setPopulated: (state) => {
            state.populated = !state.populated;
        },
        updatePlayerCards: (state) => {
            state.playerCards.shift();
        },
        updateOpponentCards: (state) => {
            state.opponentCards.shift();
        },
        setGameOver: (state) => {
            state.gameOver = !state.gameOver;
        },
        setWinner: (state, { payload }) => {
            state.playerWon = payload;
        },
        resetGameState: (state) => ({
            ...initialState,
            deckSize: state.deckSize,
            gameOver: state.gameOver,
            playerWon: state.playerWon,
        }),
    },
});

export const {
    setDeckSize,
    setPlayerCards,
    setOpponentCards,
    setCurrentPlayerCard,
    setCurrentOpponentCard,
    setPopulated,
    updatePlayerCards,
    updateOpponentCards,
    setWinner,
    setGameOver,
    resetGameState,
} = cardsSlice.actions;

export const cardsSelector = (state: { cards: CardsSliceState }) => state.cards;

export default cardsSlice.reducer;

// Thunk functions to dispatch multiple actions
// built in batch() to render single UI change for multiple state changes

export const gameEnd = (winner: 0 | 1, dispatch: Dispatch) =>
    batch((): void => {
        dispatch(setWinner(winner));
        dispatch(resetGameState());
        dispatch(setGameOver());
    });

// if player card has higher value he wins the opponent card and retains his card
export const cardWin = (
    player: IPlayer | Record<string, never>,
    opponent: IPlayer | Record<string, never>,
    nextPlayerCard: IPlayer,
    nextOpponentCard: IPlayer,
    time: number,
    dispatch: Dispatch
) =>
    setTimeout((): void => {
        // opponent card is undefined if has only 1 card
        // opponent loses the game
        if (nextOpponentCard === undefined) gameEnd(1, dispatch);
        else {
            batch(() => {
                // add current opponent card to player cards pile
                // add next opponent card as his current card and remove that card from state
                dispatch(setPlayerCards(opponent));
                dispatch(setCurrentOpponentCard(nextOpponentCard));
                dispatch(updateOpponentCards());
                if (nextPlayerCard !== undefined) {
                    // add current player card to player cards pile
                    // add next opponent card as his current card and remove that card from state
                    dispatch(setPlayerCards(player));
                    dispatch(setCurrentPlayerCard(nextPlayerCard));
                    dispatch(updatePlayerCards());
                }
            });
        }
    }, time);

// if player card has lower value player loses his card to opponent
export const cardLoss = (
    player: IPlayer | Record<string, never>,
    opponent: IPlayer | Record<string, never>,
    nextPlayerCard: IPlayer,
    nextOpponentCard: IPlayer,
    time: number,
    dispatch: Dispatch
) =>
    setTimeout((): void => {
        // player card is undefined if has only 1 card
        // player loses the game
        if (nextPlayerCard === undefined) gameEnd(0, dispatch);
        else {
            batch(() => {
                // add current player card to opponent cards pile
                // add next player card as his current card and remove that card from state
                dispatch(setOpponentCards(player));
                dispatch(setCurrentPlayerCard(nextPlayerCard));
                dispatch(updatePlayerCards());
                if (nextOpponentCard !== undefined) {
                    // add current opponent card to his cards pile
                    // add next opponent card as his current card and remove that card from state
                    dispatch(setOpponentCards(opponent));
                    dispatch(setCurrentOpponentCard(nextOpponentCard));
                    dispatch(updateOpponentCards());
                }
            });
        }
    }, time);

// if both cards have same value both retain their cards
export const cardDraw = (
    player: IPlayer | Record<string, never>,
    opponent: IPlayer | Record<string, never>,
    nextPlayerCard: IPlayer,
    nextOpponentCard: IPlayer,
    time: number,
    dispatch: Dispatch
) =>
    setTimeout((): void => {
        batch(() => {
            // player card is undefined if has only 1 card and retains it
            // add current opponent card to his cards pile, add his next card as his current card and remove that card from state
            if (nextPlayerCard === undefined) {
                dispatch(setOpponentCards(opponent));
                dispatch(setCurrentOpponentCard(nextOpponentCard));
                dispatch(updateOpponentCards());
            }
            // opponent card is undefined if has only 1 card and retains it
            // add current player card to his cards pile, add his next card as his current card and remove that card from state
            else if (nextOpponentCard === undefined) {
                dispatch(setPlayerCards(player));
                dispatch(setCurrentPlayerCard(nextPlayerCard));
                dispatch(updatePlayerCards());
            }
            // both have more than 1 card
            // both retain their cards and move to their next cards
            else {
                dispatch(setPlayerCards(player));
                dispatch(setOpponentCards(opponent));
                dispatch(setCurrentPlayerCard(nextPlayerCard));
                dispatch(setCurrentOpponentCard(nextOpponentCard));
                dispatch(updatePlayerCards());
                dispatch(updateOpponentCards());
            }
        });
    }, time);
