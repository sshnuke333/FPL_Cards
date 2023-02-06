import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { IPlayer } from '../typings/components';

const fetchURL = process.env.EXPRESS_URL as string;

type HeaderSliceState = {
    loading: boolean;
    hasErrors: boolean;
    fplPlayers: IPlayer[];
    playerTypes: Record<string, unknown>[];
};

export const initialState: HeaderSliceState = {
    loading: false,
    hasErrors: false,
    fplPlayers: [],
    playerTypes: [{}],
};

/* eslint-disable no-param-reassign */

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        getFPLPlayers: (state) => {
            state.loading = true;
        },
        getFPLPlayersSuccess: (
            state,
            {
                payload,
            }: PayloadAction<{
                elements: IPlayer[];
                element_types: Record<string, unknown>[];
            }>
        ) => {
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

export const headerSelector = (state: { Header: HeaderSliceState }) =>
    state.Header;

export default headerSlice.reducer;

export const fetchFPLData = async (dispatch: Dispatch) => {
    dispatch(getFPLPlayers());
    try {
        const response = await fetch(fetchURL, { method: 'GET' }).then((res) =>
            res.json()
        );
        dispatch(getFPLPlayersSuccess(response));
    } catch (error) {
        dispatch(getFPLPlayersFailure());
    }
};
