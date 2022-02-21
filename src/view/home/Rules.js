import React, { useState } from 'react';
import {
    Div,
    List,
    ListItem,
    RulesContainer,
    InteractiveRules,
    Text,
    StyledLink,
} from './Rules.styles';
import { Card } from '../../components/Card';
export const Rules = ({ player }) => {
    const [description, setDescription] = useState(
        'Click on the stat button for info'
    );
    const [rule, setRule] = useState('');

    const displayStat = (e) => {
        switch (e.target.innerText) {
            case 'POINTS':
                setDescription('Total FPL Points scored Till now :');
                setRule('Higher value wins');
                break;
            case 'PP90':
                setDescription('Total Points Per 90 minutes :');
                setRule('Higher value wins');
                break;
            case 'VALUE':
                setDescription('Total FPL Points / player cost :');
                setRule('Higher value wins');
                break;
            case 'ICT RANK':
                setDescription("FPL's ICT index Rank based on player type :");
                setRule('Lower value wins');
                break;
        }
    };
    return (
        <Div>
            <h3 style={{ fontSize: '5rem' }}>Rules</h3>
            <List>
                <ListItem>You will assigned 11 cards by default</ListItem>
                <ListItem>
                    You can change this using settings in the play area in the
                    next page
                </ListItem>
                <ListItem>
                    Only your current card will visible in play area
                </ListItem>
                <ListItem>you can peek at your cards</ListItem>
                <ListItem>
                    Opponent's card will be hidden until you make a choice{' '}
                </ListItem>
                <ListItem>rest of the opponent cards will be hidden</ListItem>
                <ListItem>
                    you win the game if you get all opponent's cards
                </ListItem>
                <ListItem>
                    your win / lose based on your card stats, check example
                    below{' '}
                </ListItem>
            </List>
            <RulesContainer>
                <InteractiveRules>
                    <Text color="#dad400">{description}</Text>
                    {rule.length !== 0 ? (
                        <>
                            <Text align="end">{rule}</Text>
                            <Text align="end" size="2rem">
                                *equal value results to draw
                            </Text>
                            <StyledLink to="play">start Playing</StyledLink>
                        </>
                    ) : (
                        <Text align="end">{rule}</Text>
                    )}
                </InteractiveRules>
                {player !== undefined ? (
                    <Card
                        player={player}
                        disabled={false}
                        handleStatClick={(e) => displayStat(e)}
                    />
                ) : (
                    <div></div>
                )}
            </RulesContainer>
        </Div>
    );
};
