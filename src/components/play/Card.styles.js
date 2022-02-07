import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 1000px;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardContent = styled.div`
    width: 21rem;
    height: 30rem;
    border: 0.25rem solid black;
    border-radius: 0.5rem;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.6);
    background: linear-gradient(270deg, #963cff, #37003c);
    background-size: contain;
`;

export const ImageContent = styled.div`
    display: grid;
    height: 18rem;
    grid-template-columns: 3rem 1rem 17rem;
    grid-template-rows: 1rem 3rem repeat(4, 3.5rem);
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
    width: 17rem;
    height: 17rem;
    grid-column: 3/4;
    grid-row: 2/7;
`;

export const StatContent = styled.div`
    height: 12rem;
    margin-bottom: 2px;
    background-color: whitesmoke;
    box-shadow: 0.5px -2px 2px rgba(0, 0, 0, 0.4);
    text-align: center;
    font-size: 1.5rem;
    display: flex;
    flex-wrap: wrap;
`;

export const StatButton = styled.button`
    width: 7rem;
    height: 6rem;
    cursor: pointer;
    background-color: ${(props) => (props.color ? props.color : 'white')};
    &:hover {
        border: 1px solid black;
    }
`;
