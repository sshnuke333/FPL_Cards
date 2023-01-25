import { configureStore } from '@reduxjs/toolkit';

import HeaderReducer from './store/Header.slice';
import cardReducer from './store/Cards.slice';

export const store = configureStore({
    reducer: {
        Header: HeaderReducer,
        cards: cardReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
