import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './index.styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './App';
import { rootReducer } from './store/rootReducer';

const store = configureStore({ reducer: rootReducer });

render(
    <React.StrictMode>
        <GlobalStyle />
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
