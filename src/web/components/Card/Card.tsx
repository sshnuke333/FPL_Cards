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
    player: {
        code?: number;
        element_type?: number;
        first_name: string;
        second_name: string;
        web_name: string;
        now_cost?: number;
        total_points: number;
        team_code?: number;
        value_season: string;
        minutes: number;
        ict_index_rank_type: number;
    };
    margin?: string;
    display?: string;
    animate: boolean;
    zIndex: string;
    flip: boolean;
    handleStatClick: () => void;
    disabled?: boolean;
}
const Card = ({
    player,
    margin,
    display,
    zIndex,
    animate,
    flip,
    handleStatClick,
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
                onClick={handleStatClick}
            >
                <StatName>POINTS</StatName>
                <StatValue>{player.total_points}</StatValue>
            </StatButton>
            <StatButton id="PP90" disabled={disabled} onClick={handleStatClick}>
                <StatName>PP90</StatName>
                <StatValue>
                    {(player.total_points / (player.minutes / 90)).toFixed(2)}
                </StatValue>
            </StatButton>
            <StatButton
                id="Value"
                disabled={disabled}
                onClick={handleStatClick}
            >
                <StatName>VALUE</StatName>
                <StatValue>{parseFloat(player.value_season)}</StatValue>
            </StatButton>
            <StatButton
                id="ICT-rank"
                disabled={disabled}
                onClick={handleStatClick}
            >
                <StatName>ICT RANK</StatName>
                <StatValue>{player.ict_index_rank_type}</StatValue>
            </StatButton>
        </StatContent>
    </CardContent>
);

export default Card;
