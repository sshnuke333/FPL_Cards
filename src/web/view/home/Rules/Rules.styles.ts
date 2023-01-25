import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.div`
    height: 90vh;
    color: white;
    margin: 1rem 0.5rem;
    padding: 1rem;
    @media only screen and (max-width: 1200px) {
        height: auto;
    }
`;

export const List = styled.ul`
    font-size: 1.5rem;
    text-align: start;
    margin: 0 0.5rem;
    padding: 1rem;
    @media only screen and (max-width: 576px) {
        font-size: 1rem;
        margin: 0.25rem;
        padding: 0.5rem;
    }
`;

export const ListItem = styled.li`
    list-style: square;
`;

export const RulesContainer = styled.div`
    display: flex;
    place-items: center;
    justify-content: space-evenly;
    height: 80%;
    @media only screen and (max-width: 1200px) {
        height: auto;
        flex-direction: column;
    }
`;

export const InteractiveRules = styled(RulesContainer)`
    max-width: 50%;
    flex-direction: column;
    text-align: start;
    @media only screen and (max-width: 1200px) {
        max-width: 80%;
    }
`;

export const Text = styled.p<{ $align?: string; $size?: string }>`
    color: ${(props) => (props.color ? props.color : 'white')};
    text-align: ${(props) => (props.$align ? props.$align : 'inherit')};
    font-size: ${(props) => (props.$size ? props.$size : '4rem')};
    @media only screen and (max-width: 576px) {
        font-size: ${(props) =>
            props.$size ? `${parseFloat(props.$size) / 2}rem` : '2rem'};
    }
`;

export const StyledLink = styled(Link)`
    font-size: 5rem;
    color: white;
    background: #3d003f;
    margin: 2rem;
    padding: 2rem;
    &:hover {
        color: #fe6900;
    }
    @media only screen and (max-width: 1200px) {
        font-size: 2.5rem;
        margin: 1rem;
        padding: 1rem;
    }
`;
