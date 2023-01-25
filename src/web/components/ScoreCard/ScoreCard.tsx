import {
    ScoreDiv,
    ScoreCardDiv,
    ScoreCardLabel,
    ScoreCardDetails,
} from './ScoreCard.styles';

interface IScoreCard {
    playerLeft: number;
    opponentLeft: number;
}
const ScoreCard = ({ playerLeft, opponentLeft }: IScoreCard): JSX.Element => (
    <ScoreCardDiv data-testid="scorecard">
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

export default ScoreCard;
