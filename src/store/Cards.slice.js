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
        resetGameState: (state) => {
            return {
                ...initialState,
                deckSize: state.deckSize,
                gameOver: state.gameOver,
            };
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

// if player card has higher value he wins the opponent card and retains his card
export function cardWin(player, opponent, nextPlayerCard, nextOpponentCard) {
    return (dispatch) => {
        // opponent card is undefined if has only 1 card
        // opponent loses the game
        if (opponentCard === undefined) dispatch(gameEnd());
        else {
            batch(() => {
                // add current opponent card to player cards pile
                // add next opponent card as his current card and remove that card from state
                dispatch(setPlayerCards(opponent));
                dispatch(setCurrentOpponentCard(nextOpponentCard));
                dispatch(updateOpponentCards());
                if (playerCard !== undefined) {
                    // add current player card to player cards pile
                    // add next opponent card as his current card and remove that card from state
                    dispatch(setPlayerCards(player));
                    dispatch(setCurrentPlayerCard(nextPlayerCard));
                    dispatch(updatePlayerCards());
                }
            });
        }
    };
}
// if player card has lower value player loses his card to opponent
export function cardLoss(player, opponent, nextPlayerCard, nextOpponentCard) {
    return (dispatch) => {
        // player card is undefined if has only 1 card
        // player loses the game
        if (playerCard === undefined) dispatch(gameEnd());
        else {
            batch(() => {
                // add current player card to opponent cards pile
                // add next player card as his current card and remove that card from state
                dispatch(setOpponentCards(player));
                dispatch(setCurrentPlayerCard(nextPlayerCard));
                dispatch(updatePlayerCards());
                if (opponentCard !== undefined) {
                    // add current opponent card to his cards pile
                    // add next opponent card as his current card and remove that card from state
                    dispatch(setOpponentCards(opponent));
                    dispatch(setCurrentOpponentCard(nextOpponentCard));
                    dispatch(updateOpponentCards());
                }
            });
        }
    };
}
// if both cards have same value both retain their cards
export function cardDraw(player, opponent, nextPlayerCard, nextopponentCard) {
    return (dispatch) => {
        batch(() => {
            // player card is undefined if has only 1 card and retains it
            // add current opponent card to his cards pile, add his next card as his current card and remove that card from state
            if (playerCard === undefined) {
                dispatch(setOpponentCards(opponent));
                dispatch(setCurrentOpponentCard(nextOpponentCard));
                dispatch(updateOpponentCards());
            }
            // opponent card is undefined if has only 1 card and retains it
            // add current player card to his cards pile, add his next card as his current card and remove that card from state
            else if (opponentCard === undefined) {
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
                dispatch(setCurrentOpponentCard(nexOpponentCard));
                dispatch(updatePlayerCards());
                dispatch(updateOpponentCards());
            }
        });
    };
}
export function gameEnd() {
    return (dispatch) => {
        batch(() => {
            dispatch(resetGameState());
            dispatch(setGameOver());
        });
    };
}
