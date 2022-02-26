import React from 'react';
import { useSelector } from 'react-redux';
import { headerSelector } from '../../store/Header.slice';
import { Div, ShowCase, StyledP } from './Home.styles';
import { Rules } from './Rules';
import { Card } from '../../components/Card';

export const Home = () => {
    const { fplPlayers } = useSelector(headerSelector);
    return (
        <>
            <Div>
                <ShowCase>
                    {Object.keys(fplPlayers).length !== 0 ? (
                        <>
                            <Card display="none" player={fplPlayers[32]} />
                            <Card
                                margin="-5rem"
                                zIndex="1000"
                                player={fplPlayers[371]}
                            />
                            <Card
                                margin="-5rem"
                                display="none"
                                player={fplPlayers[404]}
                            />
                        </>
                    ) : (
                        <div></div>
                    )}
                </ShowCase>
                <StyledP>A fun fpl based card game</StyledP>
            </Div>
            <Rules player={fplPlayers[18]} />
        </>
    );
};
