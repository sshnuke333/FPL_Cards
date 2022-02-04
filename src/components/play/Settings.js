import React from 'react';
import { Div, Button, Form, Gear } from './Settings.styles';

const displayForm = (e) => {
    let attribute = 'aria-expanded';
    let expanded = e.target.getAttribute(attribute);
    let form = document.getElementById('settings');
    expanded === 'false'
        ? e.target.setAttribute(attribute, 'true')
        : e.target.setAttribute(attribute, 'false');
    expanded === 'false'
        ? (form.style.display = 'block')
        : (form.style.display = '');
};

const updateDisplay = (e) => {
    document.querySelector('output').value = `${e.target.value} Cards`;
};

export const Settings = () => {
    return (
        <Div data-testid="settings">
            <Button
                aria-label="settings"
                aria-expanded="false"
                onClick={displayForm}
            >
                <Gear size={24} style={{ PointerEvent: 'none' }} />
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
                    min="5"
                    max="11"
                    step="2"
                    onInput={updateDisplay}
                />
                <output
                    name="result"
                    htmlFor="deck"
                    style={{ display: 'block', paddingTop: '0.5rem' }}
                >
                    11 Cards
                </output>
            </Form>
        </Div>
    );
};
