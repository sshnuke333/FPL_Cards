import styled from 'styled-components';

export const ScoreCardDiv = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    place-self: center;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, auto);
    place-items: center;
    font-size: 2rem;
    line-height: 4rem;
    text-align: center;
    margin: 1rem 0;
    @media only screen and (max-width: 996px) {
        font-size: 1rem;
        grid-row: 2/3;
    }
`;

export const ScoreCardDetails = styled.div`
    height: 2rem;
    width: 8rem;
    background-color: white;
    border: 1px solid black;
    border-bottom: none;
    color: #3d003f;
    font-size: 1rem;
    line-height: 2rem;
    grid-column: 2/3;
    grid-row: 1/2;
    @media only screen and (max-width: 576px) {
    }
`;

export const ScoreCardLabel = styled.div`
    height: 4rem;
    width: 8rem;
    background-color: #3d003f;
    border: 1px solid black;
    color: white;
    grid-column: ${(props) => props.column};
    grid-row: 2/3;
    @media only screen and (max-width: 576px) {
        width: 4rem;
    }
`;

export const ScoreDiv = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    height: 4rem;
    width: 12rem;
    display: flex;
    justify-content: space-evenly;
    place-items: center;
    background-color: #00ff87;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    @media only screen and (max-width: 576px) {
        font-size: 1.5rem;
    }
`;
