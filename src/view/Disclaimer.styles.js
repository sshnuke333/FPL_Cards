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
    color: #f72135;
`;

export const Legal = styled.h2`
    color: #f72135;
    font-size: 3rem;
`;

export const StyledP = styled.p`
    color: ${(props) => (props.color ? props.color : 'white')};
    padding: 0.5rem 0;
`;
