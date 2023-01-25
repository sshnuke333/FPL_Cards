import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { GlobalStyle } from './main.styles';
import { store } from './state';
import App from './App';

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
