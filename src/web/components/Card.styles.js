import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { renderToStaticMarkup } from 'react-dom/server';
import { Background } from './Background';
const svgBackground = encodeURIComponent(
    renderToStaticMarkup(
        <Background gradientStart={'#3d003f'} gradientEnd={'#3f003f'} />
    )
);

const rotate = keyframes`
0%{
    transform: rotateY(180deg);
}
20%{
    transform: rotateY(0deg);
}
80%{
    transform: rotateY(0deg);
}
100%{
    transform: rotateY(180deg);
}`;

const animate = css`
    animation: ${rotate} 1700ms ease-in;
`;

export const CardContent = styled.div.attrs((props) => ({
    margin: props.margin || '0.5rem',
    display: props.display || 'block',
}))`
    width: 20rem;
    height: 32rem;
    background: linear-gradient(270deg, #01f5ff, #a425ff);
    border: 0.25rem solid black;
    border-radius: 0.5rem;
    box-shadow: 4px 4px 12px 2px rgba(0, 0, 0, 0.6);
    margin: 1rem 0.5rem;
    margin-left: ${(props) => props.margin};
    backface-visibility: hidden;
    transform: ${(props) => (props.flip ? 'rotateY(180deg)' : 'none')};
    transform-style: preserve-3d;
    z-index: ${(props) => props.zIndex};
    @media only screen and (max-width: 796px) {
        margin: 1rem 0.25rem;
        display: ${(props) => props.display};
    }
    ${(props) => (props.animate ? animate : 'animation: none')}
`;

export const ImageContent = styled.div`
    display: grid;
    height: 16rem;
    grid-template-columns: 3rem 1rem 16rem;
    grid-template-rows: 1rem 3rem repeat(4, 3rem);
    background-image: ${`url("data:image/svg+xml,${svgBackground}"),linear-gradient(270deg, #01f5ff, #a425ff)`};
    background-size: cover;
`;

export const Badge = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    margin: 0.25rem;
    padding: 0.25rem;
    grid-column: 1/2;
    grid-row: 2/3;
`;

export const PlayerImg = styled.img`
    width: 15rem;
    height: 15rem;
    grid-column: 3/4;
    grid-row: 2/7;
`;

export const PlayerName = styled.div`
    width: 18rem;
    height: 3rem;
    margin-left: 2rem;
    background: #3d003f;
    color: white;
    text-align: center;
    font-size: ${(props) => (props.smallFont ? '1.5rem' : '2rem')};
    line-height: ${(props) => (props.smallFont ? '2' : '1.5')};
`;
export const StatContent = styled.div`
    width: 16rem;
    height: 13rem;
    margin: 0 2rem 2px 2rem;
    background: transparent;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
`;

export const StatButton = styled.button`
    width: 14rem;
    height: 3rem;
    font-size: 1.5rem;
    text-align: start;
    cursor: pointer;
    background-color: transparent;

    &:hover {
        transform: translateX(3rem);
        transition: ease-in 200ms;
    }
`;

export const StatName = styled.span`
    background: #3d003f;
    color: white;
    text-align: center;
    padding: 0.5rem 1rem;
`;

export const StatValue = styled(StatName)`
    background: #01f5ff;
    color: #3d003f;
`;
