import { createSlice } from '@reduxjs/toolkit';
import { batch } from 'react-redux';

export const initialState = {
    deckSize: 22,
    playerCards: [],
    opponentCards: [],
    currentPlayerCard: {},
    currentOpponentCard: {},
    populated: false,
    gameOver: false,
};

// directly mutating state: createSlice has immer

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
        resetGameState: () => {
            return initialState;
        },
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
    setGameOver,
    resetGameState,
} = cardsSlice.actions;

export const cardsSelector = (state) => state.cards;

export default cardsSlice.reducer;

// Thunk functions to dispatch multiple actions
// built in batch() to render single UI change for multiple state changes
export function resultObtained(
    player,
    opponent,
    playerCard,
    opponentCard,
    result
) {
    return (dispatch) => {
        batch(() => {
            if (result === undefined) {
                dispatch(setPlayerCards(player));
                dispatch(setOpponentCards(opponent));
            } else if (result) {
                dispatch(setPlayerCards(player));
                dispatch(setPlayerCards(opponent));
            } else {
                dispatch(setOpponentCards(opponent));
                dispatch(setOpponentCards(player));
            }
            dispatch(setCurrentPlayerCard(playerCard));
            dispatch(setCurrentOpponentCard(opponentCard));
            dispatch(updatePlayerCards());
            dispatch(updateOpponentCards());
        });
    };
}
export function gameEnd() {
    return (dispatch) => {
        batch(() => {
            dispatch(setPopulated());
            dispatch(resetGameState());
            dispatch(setGameOver());
        });
    };
}
