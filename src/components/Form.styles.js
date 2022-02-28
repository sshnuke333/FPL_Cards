import styled from 'styled-components';

export const InputControl = styled.div`
    display: none;
    padding: 1rem;
    color: white;
`;

export const Input = styled.input`
    display: block;
    padding: 0.5rem 0;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;

export const Output = styled.output`
    display: block;
`;
