import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Play from '../Play';

import { store } from '../../../state';

// limited tests as component depends on external API, cannot mock as you Don't mock what you don't own

describe('Play Component renders', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Play />
            </Provider>
        );
    });
    it('settings component', () => {
        expect(screen.getByTestId(/settings/i)).toBeInTheDocument();
    });
    it('scorecard component', () => {
        expect(screen.getByTestId(/scorecard/i)).toBeInTheDocument();
    });
    describe('settings component has', () => {
        it('start button enabled', () => {
            expect(
                screen.getByRole('button', { name: /start/i })
            ).not.toBeDisabled();
        });
        it('reset button disabled', () => {
            expect(
                screen.getByRole('button', { name: /reset/i })
            ).toBeDisabled();
        });
        it('peek button disabled', () => {
            expect(
                screen.getByRole('button', { name: /peek/i })
            ).toBeDisabled();
        });
    });
});
