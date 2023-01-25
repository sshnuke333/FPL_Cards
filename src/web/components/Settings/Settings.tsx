import { FormEvent } from 'react';
import { expandTarget, toggleDisplay } from '../../helpers/display';
import { Button, PlaySVG, ResetSVG, Gear, Div, Peek } from './Settings.styles';
import Form from '../Form/Form';

interface ISettings {
    start?: () => void;
    startActive: boolean;
    reset?: () => void;
    resetActive: boolean;
    updateOutput: (e: FormEvent) => void;
    peekAllowed: boolean;
}

const Settings = ({
    start = () => {},
    startActive,
    reset = () => {},
    resetActive,
    updateOutput,
    peekAllowed,
}: ISettings): JSX.Element => (
    <Div data-testid="settings">
        <Button
            aria-label="start"
            aria-disabled={startActive ? `${startActive}` : 'false'}
            onClick={start}
            disabled={startActive}
        >
            <PlaySVG />
        </Button>
        <Button
            aria-label="reset"
            aria-disabled={!resetActive ? 'true' : `${resetActive}`}
            onClick={reset}
            disabled={resetActive}
        >
            <ResetSVG />
        </Button>
        <Button
            aria-label="peek"
            aria-expanded="false"
            aria-controls="peek-cards"
            aria-disabled={!peekAllowed ? 'true' : `${peekAllowed}`}
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

export default Settings;
