import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Settings } from './Settings';

describe('Settings component renders', () => {
    beforeEach(() => {
        render(<Settings />);
    });
    it('a start button', () => {
        expect(
            screen.getByRole('button', { name: /start/i })
        ).toBeInTheDocument();
    });
    it('a reset button', () => {
        expect(
            screen.getByRole('button', { name: /reset/i })
        ).toBeInTheDocument();
    });
    it('a peek button', () => {
        expect(
            screen.getByRole('button', { name: /peek/i })
        ).toBeInTheDocument();
    });
    it('a settings button', () => {
        expect(
            screen.getByRole('button', { name: /settings/i })
        ).toBeInTheDocument();
    });
    describe('settings button', () => {
        it('is not expanded', () => {
            expect(
                screen.getByRole('button', {
                    name: /settings/i,
                    expanded: false,
                })
            ).toBeInTheDocument();
        });
        it('on clicking, it displays form', () => {
            userEvent.click(screen.getByRole('button', { name: /settings/i }));
            expect(screen.getByTestId(/slider/i)).toBeVisible();
        });
        it('on clicking again, it hides form', () => {
            userEvent.dblClick(
                screen.getByRole('button', { name: /settings/i })
            );
            expect(screen.getByTestId(/slider/i)).not.toBeVisible();
        });
    });
});
