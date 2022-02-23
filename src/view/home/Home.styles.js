import styled from 'styled-components';

export const Div = styled.div`
    display: flex;
    place-items: center;
    flex-direction: column;
    height: calc(100vh - 4rem);
    color: white;
    @media only screen and (min-width: 1200px) {
        flex-direction: row;
    }
    @media only screen and (max-width: 996px) {
        height: auto;
    } ;
`;
export const ShowCase = styled.div`
    display: flex;
`;
export const StyledP = styled.p`
    font-size: 5rem;
    text-align: start;
    margin: 0.5rem;
    padding: 0.5rem;
    @media only screen and (min-width: 1200px) {
        font-size: 10rem;
        margin: 1rem;
        padding: 1rem;
    }
    @media only screen and (max-width: 796px) {
        font-size: 7rem;
        margin: 1rem;
        padding: 1rem;
    }
    @media only screen and (max-width: 576px) {
        font-size: 4rem;
        margin: 0.5rem;
        padding: 0.5rem;
    }
`;
