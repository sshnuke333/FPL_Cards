import React from 'react';
import { render, screen } from '@testing-library/react';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { Home } from './Home';
import { rootReducer } from '../../store/rootReducer';

const store = configureStore({ reducer: rootReducer });

describe('Home', () => {
    it('renders successfully', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
    });
});
