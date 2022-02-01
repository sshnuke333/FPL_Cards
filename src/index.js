import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './index.styles';
import App from './App';

render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root')
);
