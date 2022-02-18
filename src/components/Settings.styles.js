import styled from 'styled-components';

import { PlayIcon, IssueReopenedIcon, GearIcon } from '@primer/octicons-react';

const svgProps = `pointer-events: none;
width: 2rem;
height: 2rem;
margin: 0.25rem;`;

export const Button = styled.button`
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    margin: 0.5rem;
    cursor: pointer;
`;

export const PlaySVG = styled(PlayIcon)`
    ${svgProps}
    fill: green;
`;

export const ResetSVG = styled(IssueReopenedIcon)`
    ${svgProps}
    fill: red;
`;

export const Div = styled.div`
    min-width: 15rem;
    height: 10rem;
    text-align: center;
    grid-column: 1/2;
    grid-row: 1/2;
`;

export const Gear = styled(GearIcon)`
    ${svgProps}
    fill: white;
`;
