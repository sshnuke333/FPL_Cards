import React from 'react';
import { Div, RedCard, StyledP } from './NotFound.styles';

export const NotFound = () => {
    return (
        <Div>
            <RedCard />
            <StyledP>
                404 - It's a red for you. Page requested does not exist.
            </StyledP>
        </Div>
    );
};
