import React from 'react';

import {
    CardContent,
    Badge,
    PlayerImg,
    ImageContent,
    StatContent,
    StatButton,
} from './Card.styles';

export const Card = ({ player }) => {
    return (
        <CardContent>
            <ImageContent>
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
            <StatContent>
                <StatButton>
                    <span style={{ display: 'block' }}>Points</span>
                    <span>{player.total_points}</span>
                </StatButton>
                <StatButton>
                    <span style={{ display: 'block' }}>PP90</span>
                    <span>
                        {(player.total_points / (player.minutes / 90)).toFixed(
                            2
                        )}
                    </span>
                </StatButton>
                <StatButton>
                    <span style={{ display: 'block' }}>Value</span>
                    <span>{parseFloat(player.value_season)}</span>
                </StatButton>
                <StatButton>
                    <span style={{ display: 'block' }}>ICT Rank</span>
                    <span>{player.ict_index_rank_type}</span>
                </StatButton>
            </StatContent>
        </CardContent>
    );
};
