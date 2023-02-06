import styled, { keyframes } from 'styled-components';
import { renderToStaticMarkup } from 'react-dom/server';
import Background from '../Background/Background';

const svgBackground: string = encodeURIComponent(
    renderToStaticMarkup(
        <Background gradientStart={'#01f5ff'} gradientEnd={'#a425ff'} />
    )
);

const rotate = keyframes`
0%{
    transform: rotate(0deg);
}
8%{
    transform: rotate(30deg);
}
16%{
    transform: rotate(60deg);
}
24%{
    transform: rotate(90deg);
}
32%{
    transform: rotate(120deg);
}
40%{
    transform: rotate(150deg);
}
48%{
    transform: rotate(180deg);
}
56%{
    transform: rotate(210deg);
}
64%{
    transform: rotate(240deg);
}
72%{
    transform: rotate(270deg);
}
80%{
    transform: rotate(300deg);
}
88%{
    transform: rotate(330deg);
}
100%{
    transform: rotate(360deg);
}`;

export const ImageContent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PlaceHolderCard = styled.div`
    position: absolute;
    width: 5rem;
    height: 8rem;
    background-image: ${`url("data:image/svg+xml,${svgBackground}"),linear-gradient(270deg, #3d003f, #3f003f)`};
    background-size: contain;
    border: 0.125rem solid black;
    border-radius: 0.5rem;
    margin: 0.25rem 0.125rem;
    transform-style: preserve-3d;
    animation: ${rotate} infinite 2000ms ease-in;
`;
