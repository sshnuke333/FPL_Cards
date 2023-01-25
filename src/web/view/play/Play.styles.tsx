import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { renderToStaticMarkup } from 'react-dom/server';
import { Background } from '../../components';

const svgBackground = encodeURIComponent(
    renderToStaticMarkup(
        <Background gradientStart={'#3d003f'} gradientEnd={'#3f003f'} />
    )
);

const rotate = keyframes`
0%{
    transform: rotateY(0deg);
}
20%{
    transform: rotateY(-180deg);
}
80%{
    transform: rotateY(-180deg);
}
100%{
    transform: rotateY(0deg);
}`;

const animation = css`
    animation: ${rotate} 1700ms ease-in;
`;

export const PlayDiv = styled.div`
    display: grid;
    grid-template-columns: 16rem auto 25rem;
    grid-template-rows: 10rem 50% auto;
    place-items: center;
    @media only screen and (max-width: 996px) {
        grid-template-columns: 1rem auto 1rem;
        grid-template-rows: 10rem 6rem 70% auto;
    }
    @media only screen and (min-width: 997px) and (max-width: 1440px) {
        grid-template-columns: 16rem auto 3rem;
        grid-template-rows: 10rem 70% auto;
    }
`;

export const CurrentCards = styled.div`
    grid-column: 2/3;
    grid-row: 3/4;
    display: flex;
    justify-content: space-evenly;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        margin: 0.5rem 0;
    }
    @media only screen and (min-width: 769px) and (max-width: 996px) {
        flex-direction: row;
        margin: 0.5rem;
    }
    @media only screen and (min-width: 997px) and (max-width: 1440px) {
        grid-row: 2/3;
    }
`;

export const CardBack = styled.div.withConfig({
    shouldForwardProp: (prop) => !['animate'].includes(prop),
})<{ animate: boolean }>`
    position: absolute;
    width: 20rem;
    height: 32rem;
    background-image: ${`url("data:image/svg+xml,${svgBackground}"),linear-gradient(270deg, #01f5ff, #a425ff)`};
    background-size: contain;
    border: 0.25rem solid black;
    border-radius: 0.5rem;
    margin: 1rem 0.5rem;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    ${({ animate }) => (animate ? animation : 'animation: none')}
`;

export const Placeholder = styled.div`
    padding: 2rem;
    background: #3d003f;
    color: white;
    font-size: 5rem;
    @media only screen and (max-width: 996px) {
    }
`;

export const CardContainer = styled.div`
    display: none;
    height: 35rem;
    flex-direction: column;
    overflow-y: scroll;
    margin: 0 1rem;
    grid-column: 2/3;
    grid-row: 3/4;
    scroll-behavior: smooth;
    scrollbar-color: #edf002 transparent;
    @media only screen and (max-width: 576px) {
        margin: 0.5rem;
        padding: 1rem;
    }
    @media only screen and (min-width: 577px) and (max-width: 996px) {
        margin: 0.5rem;
        padding: 2rem;
    }
    @media only screen and (min-width: 997px) and (max-width: 1440px) {
        padding: 3rem;
    }
    @media only screen and (min-width: 1441px) {
        grid-column: 3/4;
        grid-row: 2/3;
    }
`;
