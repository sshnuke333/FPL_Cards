import React from 'react';
import { createGlobalStyle } from 'styled-components';

import UniSansHeavyCAPSEOT from './assets/UniSansHeavyCAPS.eot';
import UniSansHeavyCAPSWOFF2 from './assets/UniSansHeavyCAPS.woff2';
import UniSansHeavyCAPSEWOFF from './assets/UniSansHeavyCAPS.woff';
import UniSansHeavyCAPSETTF from './assets/UniSansHeavyCAPS.ttf';

import { renderToStaticMarkup } from 'react-dom/server';
import { Background } from './components/Background';
const svgBackground = encodeURIComponent(
    renderToStaticMarkup(
        <Background gradientStart={'#37003c'} gradientEnd={'#963cff'} />
    )
);

export const GlobalStyle = createGlobalStyle`

/* css reset */
*{
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
li{
	list-style: none;
}
a {
	text-decoration: none;
}

/* custom font */

@font-face {
    font-family: 'Uni Sans Heavy CAPS';
    src: url(${UniSansHeavyCAPSEOT}) format('embedded-opentype'),
        url(${UniSansHeavyCAPSWOFF2}) format('woff2'),
        url(${UniSansHeavyCAPSEWOFF})  format('woff'),
        url(${UniSansHeavyCAPSETTF}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}


html {
	font-family:'Uni Sans Heavy CAPS',sans-serif;
}

body{
	background-image: ${`url("data:image/svg+xml,${svgBackground}"),linear-gradient(270deg, #963cff, #37003c)`};
	background-size: cover;
}
`;
