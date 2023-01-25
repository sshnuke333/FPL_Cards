import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from '../Banner';

describe('Banner', () => {
    it('renders correctly', () => {
        const { asFragment } = render(
            <Router>
                <Banner />
            </Router>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    beforeEach(() => {
        render(
            <Router>
                <Banner />
            </Router>
        );
    });
    let alert: HTMLElement;
    let closeButton: HTMLElement;
    it('renders a alert banner', () => {
        expect(screen.getByLabelText(/alert/i)).toBeInTheDocument();
    });
    it('renders disclaimer link correctly', () => {
        const disclaimerLink = screen.getByRole('link', {
            name: /disclaimer/i,
        });
        expect(disclaimerLink).toBeInTheDocument();
        expect(disclaimerLink).toBeVisible();
        userEvent.click(disclaimerLink);
        expect(disclaimerLink).not.toBeVisible();
    });
    it('renders a clickable button inside alert correctly', () => {
        alert = screen.getByLabelText(/alert/i);
        closeButton = within(alert).getByRole('button', {
            hidden: false,
        });
        expect(closeButton).toBeVisible();
        expect(closeButton).toBeInTheDocument();
        expect(closeButton).not.toBeDisabled();
        expect(closeButton).toHaveAttribute('aria-label', 'close');
        userEvent.click(closeButton);
        expect(alert).not.toBeVisible();
    });
});
