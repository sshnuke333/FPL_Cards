import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { XCircleIcon } from '@primer/octicons-react';

const textStyle = `
    font-size: 1.5rem;
    color: #3d003f;
    @media only screen and (max-width: 996px) {
        font-size: 1.25rem;
    }
    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }`;

export const StyledDiv = styled.div`
    height: 4rem;
    display: grid;
    place-items: center;
    grid-template-columns: auto 3rem;
    background: linear-gradient(45deg, #fe6900, #dad400);
    font-size: 2rem;
    @media only screen and (max-width: 1200px) {
        height: 4.5rem;
    }
`;
export const BannerText = styled.span`
    padding: 0.5rem 1rem;
    ${textStyle}
`;

export const StyledLink = styled(Link)`
    ${textStyle}
    text-decoration: underline 3px #3d003f;
    &:hover {
        color: #fe6900;
    }
`;

export const HideBanner = styled.button`
    width: 2rem;
    height: 2rem;
    margin: 0.5rem;
    background-color: transparent;
    cursor: pointer;
`;
export const Close = styled(XCircleIcon)`
    width: 1.5rem;
    height: 1.5rem;
    pointer-events: none;
    vertical-align: 0;
`;
