import { combineReducers } from 'redux';
import HeaderReducer from './Header.slice';
import cardReducer from './Cards.slice';

export const rootReducer = combineReducers({
    Header: HeaderReducer,
    cards: cardReducer,
});
