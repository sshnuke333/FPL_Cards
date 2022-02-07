import React from 'react';
import { PlayDiv } from './Play.styles';

import { Card } from './Card';
import { Settings } from './Settings';

export const Play = () => {
    return (
        <PlayDiv>
            <Card />
            <Settings />
        </PlayDiv>
    );
};
