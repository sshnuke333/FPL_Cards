import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { Banner } from './Banner';

describe('Banner', () => {
    beforeEach(() => {
        render(
            <Router>
                <Banner />
            </Router>
        );
    });
    let alert, closeButton;
    it('renders a alert banner', () => {
        expect(screen.getByLabelText(/alert/i)).toBeInTheDocument();
    });
    it('renders a link', () => {
        expect(
            screen.getByRole('link', { name: /disclaimer/i })
        ).toBeInTheDocument();
    });
    it('renders a clickable button inside alert', () => {
        alert = screen.getByLabelText(/alert/i);
        closeButton = within(alert).getByRole('button', {
            hidden: false,
        });
        expect(closeButton).toBeInTheDocument();
        expect(closeButton).not.toBeDisabled();
    });
    it('banner closes on button click', () => {
        userEvent.click(closeButton);
        expect(alert).not.toBeVisible();
    });
});
