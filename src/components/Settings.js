import React from 'react';
// import styled components
import { Button, PlaySVG, ResetSVG, Gear, Div } from './Settings.styles';
// import helper
import { toggleDisplay } from '../helpers/display';
import { Form } from './Form';

export const Settings = ({
    start,
    startActive,
    reset,
    resetActive,
    updateOutput,
}) => {
    return (
        <Div data-testid="settings">
            <Button
                aria-label="start"
                aria-disabled={`${startActive}`}
                onClick={start}
                disabled={startActive}
            >
                <PlaySVG />
            </Button>
            <Button
                aria-label="reset"
                aria-disabled={`${resetActive}`}
                onClick={reset}
                disabled={resetActive}
            >
                <ResetSVG />
            </Button>
            <Button
                aria-label="settings"
                aria-expanded="false"
                onClick={(e) => toggleDisplay(e, 'settings', 'block')}
            >
                <Gear />
            </Button>
            <Form updateStatus={updateOutput} />
        </Div>
    );
};
