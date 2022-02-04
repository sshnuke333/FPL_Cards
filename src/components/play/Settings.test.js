import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Settings } from './Settings';

describe('Settings component renders', () => {
    beforeEach(() => {
        render(<Settings />);
    });
    it('a button', () => {
        expect(
            screen.getByRole('button', { name: /settings/i })
        ).toBeInTheDocument();
    });
    it('a hidden options div', () => {
        expect(screen.getByLabelText(/options/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/options/i)).not.toBeVisible();
    });
    it('options has a range input in it', () => {
        const form = screen.getByLabelText(/options/i);
        expect(within(form).getByLabelText(/slider/i)).toBeInTheDocument();
    });
});
describe('button', () => {
    beforeEach(() => {
        render(<Settings />);
    });
    it('is not expanded', () => {
        expect(
            screen.getByRole('button', { expanded: false })
        ).toBeInTheDocument();
    });
    it('on clicking displays form', () => {
        userEvent.click(screen.getByRole('button', { name: /settings/i }));
        expect(screen.getByLabelText(/options/i)).toBeVisible();
    });
    it('on clicking again hides form', () => {
        userEvent.dblClick(screen.getByRole('button', { name: /settings/i }));
        expect(screen.getByLabelText(/options/i)).not.toBeVisible();
    });
});
