import React from 'react';
import {
    ScoreDiv,
    ScoreCardDiv,
    ScoreCardLabel,
    ScoreCardDetails,
} from './ScoreCard.styles';

export const ScoreCard = ({ playerLeft, opponentLeft }) => {
    return (
        <ScoreCardDiv>
            <ScoreCardDetails>Cards Left</ScoreCardDetails>
            <ScoreCardLabel column="1/2">YOU</ScoreCardLabel>
            <ScoreDiv>
                <span>{playerLeft}</span>
                <span>-</span>
                <span>{opponentLeft}</span>
            </ScoreDiv>
            <ScoreCardLabel column="3/4">COMP</ScoreCardLabel>
        </ScoreCardDiv>
    );
};
