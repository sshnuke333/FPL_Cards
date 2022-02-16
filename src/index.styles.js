import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { renderToStaticMarkup } from 'react-dom/server';
import { Background } from './components/Background';
const svgBackground = encodeURIComponent(
    renderToStaticMarkup(
        <Background gradientStart={'#37003c'} gradientEnd={'#963cff'} />
    )
);

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap');
*{
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
html {
	font-family:'Roboto',sans-serif;
}
li{
	list-style: none;
}
a {
	text-decoration: none;
}
body{
	background-image: ${`url("data:image/svg+xml,${svgBackground}"),linear-gradient(270deg, #963cff, #37003c)`};
	background-size: cover;
}
`;
