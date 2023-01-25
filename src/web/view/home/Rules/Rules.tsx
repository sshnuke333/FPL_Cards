import { FC, MouseEvent, useState } from 'react';
import RulesList from '../../../constants/rules.constant';
import { Card } from '../../../components';
import {
    Div,
    List,
    ListItem,
    RulesContainer,
    InteractiveRules,
    Text,
    StyledLink,
} from './Rules.styles';
import { IPlayer } from '../../../typings/components';

const Rules: FC<{ player: IPlayer | Record<string, never> }> = ({ player }) => {
    const [description, setDescription] = useState(
        'Click on the stat button for info'
    );
    const [rule, setRule] = useState('');

    const displayStat = (e: MouseEvent): void => {
        const targetElement = e.target as HTMLElement;
        switch (targetElement.innerText) {
            case 'POINTS':
                setDescription('Total FPL Points scored Till now :');
                setRule('Higher points wins');
                break;
            case 'PP90':
                setDescription('Total Points Per 90 minutes :');
                setRule('Higher PP90 wins');
                break;
            case 'VALUE':
                setDescription('Total FPL Points / player cost :');
                setRule('Higher value wins');
                break;
            case 'ICT RANK':
                setDescription("FPL's ICT index Rank based on player type :");
                setRule('Lower rank wins');
                break;
            default:
                break;
        }
    };

    return (
        <Div>
            <h3 style={{ fontSize: '5rem' }}>Rules</h3>
            <List>
                {RulesList.map((rules: string) => (
                    <ListItem key={rules}>{rules}</ListItem>
                ))}
            </List>
            <RulesContainer>
                <InteractiveRules>
                    <Text color="#dad400">{description}</Text>
                    {rule.length !== 0 ? (
                        <>
                            <Text $align="end">{rule}</Text>
                            <Text $align="end" $size="2rem">
                                *equal value results to draw
                            </Text>
                            <StyledLink to="play">start Playing</StyledLink>
                        </>
                    ) : (
                        <Text $align="end">{rule}</Text>
                    )}
                </InteractiveRules>
                {player !== undefined ? (
                    <Card
                        player={player}
                        disabled={false}
                        handleStatClick={displayStat}
                    />
                ) : (
                    <div></div>
                )}
            </RulesContainer>
        </Div>
    );
};

export default Rules;
