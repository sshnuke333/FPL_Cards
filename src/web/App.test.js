import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './App';
import { rootReducer } from './store/rootReducer';

const store = configureStore({ reducer: rootReducer });

describe('App', () => {
    it('renders', () => {
        render(
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        );
    });
});
