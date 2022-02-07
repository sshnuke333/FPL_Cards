import React from 'react';
import {
    CardContainer,
    CardContent,
    Badge,
    PlayerImg,
    ImageContent,
    StatContent,
    StatButton,
} from './Card.styles';

export const Card = () => {
    return (
        <CardContainer>
            <CardContent>
                <ImageContent>
                    <PlayerImg src="" alt="Player image" />
                    <Badge src="" alt="Club badge" />
                </ImageContent>
                <StatContent>
                    <StatButton />
                </StatContent>
            </CardContent>
        </CardContainer>
    );
};
