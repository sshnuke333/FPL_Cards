import React from 'react';
// import styled components
import { Button, PlaySVG, ResetSVG, Gear, Div, Peek } from './Settings.styles';
// import helper
import { expandTarget, toggleDisplay } from '../helpers/display';
import { Form } from './Form';

export const Settings = ({
    start = (f) => f,
    startActive,
    reset = (f) => f,
    resetActive,
    updateOutput,
    peekAllowed,
}) => {
    return (
        <Div data-testid="settings">
            <Button
                aria-label="start"
                aria-disabled={
                    startActive === undefined ? 'false' : `${startActive}`
                }
                onClick={start}
                disabled={startActive}
            >
                <PlaySVG />
            </Button>
            <Button
                aria-label="reset"
                aria-disabled={
                    resetActive === undefined ? 'true' : `${resetActive}`
                }
                onClick={reset}
                disabled={resetActive}
            >
                <ResetSVG />
            </Button>
            <Button
                aria-label="peek"
                aria-expanded="false"
                aria-controls="peek-cards"
                aria-disabled={
                    peekAllowed === undefined ? 'true' : `${peekAllowed}`
                }
                disabled={peekAllowed}
                onClick={(e) => {
                    expandTarget(e, 'peek-cards', 'flex');
                    toggleDisplay('current', 'flex');
                }}
            >
                <Peek />
            </Button>
            <Button
                aria-label="settings"
                aria-expanded="false"
                aria-controls="settings"
                onClick={(e) => expandTarget(e, 'settings', 'block')}
            >
                <Gear />
            </Button>
            <Form updateStatus={updateOutput} />
        </Div>
    );
};
