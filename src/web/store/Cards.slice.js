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
    playerWon: 0,
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
        setWinner: (state, { payload }) => {
            state.playerWon = payload;
        },
        resetGameState: (state) => {
            return {
                ...initialState,
                deckSize: state.deckSize,
                gameOver: state.gameOver,
                playerWon: state.playerWon,
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
    setWinner,
    setGameOver,
    resetGameState,
} = cardsSlice.actions;

export const cardsSelector = (state) => state.cards;

export default cardsSlice.reducer;

// Thunk functions to dispatch multiple actions
// built in batch() to render single UI change for multiple state changes

// if player card has higher value he wins the opponent card and retains his card
export function cardWin(
    player,
    opponent,
    nextPlayerCard,
    nextOpponentCard,
    time
) {
    return (dispatch) =>
        setTimeout((time) => {
            // opponent card is undefined if has only 1 card
            // opponent loses the game
            if (nextOpponentCard === undefined) dispatch(gameEnd(1));
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
}
// if player card has lower value player loses his card to opponent
export function cardLoss(
    player,
    opponent,
    nextPlayerCard,
    nextOpponentCard,
    time
) {
    return (dispatch) =>
        setTimeout((time) => {
            // player card is undefined if has only 1 card
            // player loses the game
            if (nextPlayerCard === undefined) dispatch(gameEnd(0));
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
}
// if both cards have same value both retain their cards
export function cardDraw(
    player,
    opponent,
    nextPlayerCard,
    nextOpponentCard,
    time
) {
    return (dispatch) =>
        setTimeout((time) => {
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
                    dispatch(setCurrentOpponentCard(nexOpponentCard));
                    dispatch(updatePlayerCards());
                    dispatch(updateOpponentCards());
                }
            });
        }, time);
}
export function gameEnd(winner) {
    return (dispatch) => {
        batch(() => {
            dispatch(setWinner(winner));
            dispatch(resetGameState());
            dispatch(setGameOver());
        });
    };
}
