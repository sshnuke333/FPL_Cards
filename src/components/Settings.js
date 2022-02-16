import React, { useState } from 'react';
import { Button, PlaySVG, ResetSVG, Gear, Div, Form } from './Settings.styles';

import { useDispatch, useSelector } from 'react-redux';
import { headerSelector } from '../store/Header.slice';
import {
    setDeckSize,
    setPlayerCards,
    setOpponentCards,
    setCurrentPlayerCard,
    setCurrentOpponentCard,
    setPopulated,
    cardsSelector,
} from '../store/Cards.slice';

import { toggleDisplay } from '../helpers/toggleDisplay';

export const Settings = () => {
    const dispatch = useDispatch();
    const { fplPlayers } = useSelector(headerSelector);
    const { deckSize } = useSelector(cardsSelector);
    const [disabled, setDisabled] = useState(false);
    let players = [];

    const buildDeck = () => {
        const totalPlayers = Object.keys(fplPlayers).length;
        let i = 0;
        while (i < deckSize) {
            let playerKey = Math.floor(Math.random() * totalPlayers);
            let randomPlayer = fplPlayers[playerKey];
            if (
                randomPlayer.total_points >= 5 &&
                players.every((player) => player.code !== randomPlayer.code)
            ) {
                players = [...players, randomPlayer];
                i += 1;
            }
        }
    };

    const startGame = () => {
        buildDeck();
        players.map((player, index) => {
            if (index === 0) dispatch(setCurrentPlayerCard(player));
            if (index === 1) dispatch(setCurrentOpponentCard(player));
            if (index > 1) {
                index % 2 === 0
                    ? dispatch(setPlayerCards(player))
                    : dispatch(setOpponentCards(player));
            }
        });
        dispatch(setPopulated());
        setDisabled(true);
    };
    const updateDisplay = (e) => {
        document.querySelector('output').value = `${e.target.value} Cards`;
        dispatch(setDeckSize(parseInt(e.target.value)));
    };

    return (
        <Div data-testid="settings">
            <Button aria-label="start" onClick={startGame} disabled={disabled}>
                <PlaySVG />
            </Button>
            <Button aria-label="reset">
                <ResetSVG />
            </Button>
            <Button
                aria-label="settings"
                aria-expanded="false"
                onClick={(e) => toggleDisplay(e, 'settings', 'block')}
            >
                <Gear />
            </Button>
            <Form aria-label="options" id="settings">
                <legend style={{ paddingBottom: '0.5rem' }}>
                    choose deck size:
                </legend>
                <input
                    type="range"
                    aria-label="slider"
                    id="deck"
                    name="deck"
                    min="10"
                    max="22"
                    step="4"
                    onInput={updateDisplay}
                />
                <output
                    name="result"
                    htmlFor="deck"
                    style={{ display: 'block', paddingTop: '0.5rem' }}
                >
                    22 Cards
                </output>
            </Form>
        </Div>
    );
};
