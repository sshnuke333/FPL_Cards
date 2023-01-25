import { MouseEvent } from 'react';
import { IPlayer } from '../../typings/components.d';
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

interface ICard {
    player: IPlayer | Record<string, never>;
    margin?: string;
    display?: string;
    animate?: boolean;
    zIndex?: string;
    flip?: boolean;
    handleStatClick?: (e: MouseEvent) => void;
    disabled?: boolean;
}
const Card = ({
    player,
    margin,
    display,
    zIndex = '1000',
    animate = false,
    flip = false,
    handleStatClick = (): void => {},
    disabled = true,
}: ICard): JSX.Element => (
    <CardContent
        margin={margin}
        display={display}
        zIndex={zIndex}
        $animate={animate}
        $flip={flip}
    >
        <ImageContent>
            <PlayerImg
                src={`https://resources.premierleague.com/premierleague/photos/players/250x250/p${player.code}.png`}
                alt={`${player.first_name} ${player.second_name}'s image`}
                onError={(event): void => {
                    const { currentTarget } = event;
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
        <PlayerName $smallFont={player.web_name.length > 10}>
            {player.web_name.toUpperCase()}
        </PlayerName>
        <StatContent>
            <StatButton
                id="Points"
                disabled={disabled}
                onClick={(e: MouseEvent) => handleStatClick(e)}
            >
                <StatName>POINTS</StatName>
                <StatValue>{player.total_points}</StatValue>
            </StatButton>
            <StatButton
                id="PP90"
                disabled={disabled}
                onClick={(e: MouseEvent) => handleStatClick(e)}
            >
                <StatName>PP90</StatName>
                <StatValue>
                    {(player.total_points / (player.minutes / 90)).toFixed(2)}
                </StatValue>
            </StatButton>
            <StatButton
                id="Value"
                disabled={disabled}
                onClick={(e: MouseEvent) => handleStatClick(e)}
            >
                <StatName>VALUE</StatName>
                <StatValue>{parseFloat(player.value_season)}</StatValue>
            </StatButton>
            <StatButton
                id="ICT-rank"
                disabled={disabled}
                onClick={(e: MouseEvent) => handleStatClick(e)}
            >
                <StatName>ICT RANK</StatName>
                <StatValue>{player.ict_index_rank_type}</StatValue>
            </StatButton>
        </StatContent>
    </CardContent>
);

export default Card;
