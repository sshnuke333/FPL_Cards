import { FormEvent } from 'react';
import { InputControl, Input, Output } from './Form.styles';

const Form = ({
    updateStatus,
}: {
    updateStatus: (e: FormEvent) => void;
}): JSX.Element => (
    <InputControl data-testid="slider" id="settings">
        <label htmlFor="deck">choose deck size:</label>
        <Input
            type="range"
            aria-label="slider"
            aria-valuemin={10}
            aria-valuemax={22}
            aria-valuenow={22}
            id="deck"
            name="deck"
            min="10"
            max="22"
            step="4"
            onInput={(e: FormEvent) => updateStatus(e)}
        ></Input>
        <Output aria-label="status" name="result" htmlFor="deck">
            22 Cards
        </Output>
    </InputControl>
);

export default Form;
