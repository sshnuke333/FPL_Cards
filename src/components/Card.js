import React from 'react';

import {
    CardContent,
    Badge,
    PlayerImg,
    ImageContent,
    PlayerName,
    StatContent,
    StatButton,
    StatName,
    StatValue,
} from './Card.styles';

import { renderToStaticMarkup } from 'react-dom/server';
import { Background } from './Background';
const svgBackground = encodeURIComponent(
    renderToStaticMarkup(
        <Background gradientStart={'#3d003f'} gradientEnd={'#3f003f'} />
    )
);

export const Card = ({ player }) => {
    return (
        <CardContent>
            <ImageContent
                style={{
                    backgroundImage: `url("data:image/svg+xml,${svgBackground}"),linear-gradient(270deg, #01f5ff, #a425ff)`,
                }}
            >
                <PlayerImg
                    src={`https://resources.premierleague.com/premierleague/photos/players/250x250/p${player.code}.png`}
                    alt={`${player.first_name} ${player.second_name}'s image`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src =
                            'https://resources.premierleague.com/premierleague/photos/players/250x250/Photo-Missing.png';
                    }}
                />
                <Badge
                    src={`https://resources.premierleague.com/premierleague/badges/100/t${player.team_code}.png`}
                    alt="Club badge"
                />
            </ImageContent>
            <PlayerName>{player.web_name.toUpperCase()}</PlayerName>
            <StatContent>
                <StatButton>
                    <StatName>POINTS</StatName>
                    <StatValue>{player.total_points}</StatValue>
                </StatButton>
                <StatButton>
                    <StatName>PP90</StatName>
                    <StatValue>
                        {(player.total_points / (player.minutes / 90)).toFixed(
                            2
                        )}
                    </StatValue>
                </StatButton>
                <StatButton>
                    <StatName>VALUE</StatName>
                    <StatValue>{parseFloat(player.value_season)}</StatValue>
                </StatButton>
                <StatButton>
                    <StatName>ICT RANK</StatName>
                    <StatValue>{player.ict_index_rank_type}</StatValue>
                </StatButton>
            </StatContent>
        </CardContent>
    );
};
