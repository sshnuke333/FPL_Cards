import React from 'react';
import { useSelector } from 'react-redux';
import { headerSelector } from '../../store/Header.slice';
import { Div, ShowCase, StyledP } from './Home.styles';
import Rules from './Rules/Rules';
import { Card } from '../../components';

const Home = () => {
    const { fplPlayers } = useSelector(headerSelector);
    return (
        <>
            <Div>
                <ShowCase>
                    {Object.keys(fplPlayers).length !== 0 ? (
                        <>
                            <Card display="none" player={fplPlayers[503]} />
                            <Card
                                margin="-5rem"
                                zIndex="1000"
                                player={fplPlayers[446]}
                            />
                            <Card
                                margin="-5rem"
                                display="none"
                                player={fplPlayers[5]}
                            />
                        </>
                    ) : (
                        <div></div>
                    )}
                </ShowCase>
                <StyledP>A fun fpl based card game</StyledP>
            </Div>
            <Rules player={fplPlayers[11]} />
        </>
    );
};

export default Home;
