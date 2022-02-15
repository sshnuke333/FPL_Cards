import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    deckSize: 22,
    playerCards: [],
    opponentCards: [],
    currentPlayerCard: {},
    currentOpponentCard: {},
    gameOver: false,
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCards: (state) => {
            state.loading = true;
        },
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
    },
});

export const {
    setCards,
    setDeckSize,
    setPlayerCards,
    setOpponentCards,
    setCurrentPlayerCard,
    setCurrentOpponentCard,
} = cardsSlice.actions;

export const cardsSelector = (state) => state.cards;

export default cardsSlice.reducer;
