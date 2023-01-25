import styled from 'styled-components';

export const DisclaimerDiv = styled.div`
    display: grid;
    place-items: start;
    margin: 2rem;
    padding: 2rem;
    color: white;
    font-size: 2rem;
    line-height: 1.5;
    @media only screen and (max-width: 768px) {
        font-size: 1.5rem;
    } ;
`;

export const ExternalLink = styled.a`
    color: #dad400;
`;

export const Legal = styled.h2`
    color: #dad400;
    font-size: 3rem;
`;

export const StyledP = styled.p`
    color: ${({ color }) => color ?? 'white'};
    padding: 0.5rem 0;
`;
