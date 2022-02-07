import styled from 'styled-components';
import { GearIcon } from '@primer/octicons-react';

export const Div = styled.div`
    width: 20rem;
    height: 10rem;
    text-align: end;
`;

export const Button = styled.button`
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    margin: 0.5rem;
    cursor: pointer;
`;

export const Gear = styled(GearIcon)`
    size: 1.5rem;
    pointer-events: none;
`;

export const Form = styled.form`
    display: none;
    padding: 1rem;
`;
