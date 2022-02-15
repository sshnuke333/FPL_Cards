import { createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

export const initialState = {
    loading: false,
    hasErrors: false,
    fplPlayers: {},
    playerTypes: {},
};

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        getFPLPlayers: (state) => {
            state.loading = true;
        },
        getFPLPlayersSuccess: (state, { payload }) => {
            state.loading = false;
            state.hasErrors = false;
            state.fplPlayers = payload.elements;
            state.playerTypes = payload.element_types;
        },
        getFPLPlayersFailure: (state) => {
            state.loading = false;
            state.hasErrors = true;
        },
    },
});

export const { getFPLPlayers, getFPLPlayersFailure, getFPLPlayersSuccess } =
    headerSlice.actions;

export const headerSelector = (state) => state.Header;

export default headerSlice.reducer;

export function fetchFPLData() {
    return async (dispatch) => {
        dispatch(getFPLPlayers());
        try {
            const response = await axios.get(
                'https://fantasy.premierleague.com/api/bootstrap-static/'
            );
            dispatch(getFPLPlayersSuccess(response.data));
        } catch (error) {
            dispatch(getFPLPlayersFailure());
        }
    };
}
