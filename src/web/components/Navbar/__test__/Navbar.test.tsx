import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from '../Navbar';

const renderNavbar = (
    <Router>
        <Navbar />
    </Router>
);

describe('Navbar renders', () => {
    it('correctly', () => {
        const { asFragment } = render(renderNavbar);
        expect(asFragment()).toMatchSnapshot();
    });

    beforeEach(() => {
        render(renderNavbar);
    });

    it('a header element', () => {
        expect(screen.getByRole('banner')).toBeInTheDocument();
    });
    it('a navbar element', () => {
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
    describe('inside navbar', () => {
        it('a clickable logo', () => {
            const logo = screen.getByRole('link', {
                name: /fpl\scards\shome\s/i,
            });
            expect(logo).toBeInTheDocument();
            expect(within(logo).getByRole('img')).toBeInTheDocument();
        });
        it('a hidden expandable menu botton', () => {
            const button = screen.getByText(/Menu/i);
            expect(button).toBeInTheDocument();
            expect(button).not.toBeVisible();
        });
        it('a menu list', () => {
            expect(screen.getByRole('menu')).toBeInTheDocument();
        });
        it('a Home link in menu', () => {
            const menu = screen.getByRole('menu');
            expect(
                within(menu).getByRole('link', { name: /Home/i })
            ).toBeInTheDocument();
        });
        it('a Play link in menu', () => {
            const menu = screen.getByRole('menu');
            expect(
                within(menu).getByRole('link', { name: /Play/ })
            ).toBeInTheDocument();
        });
        it('a Disclaimer link menu', () => {
            const menu = screen.getByRole('menu');
            expect(
                within(menu).getByRole('link', { name: /Disclaimer/ })
            ).toBeInTheDocument();
        });
    });
});

describe('Menu button', () => {
    beforeEach(() => {
        render(renderNavbar);
    });
    it('is collapsed on render', () => {
        const button = screen.getByText(/Menu/i);
        expect(button).toHaveAttribute('aria-expanded', 'false');
    });
    it('expands and displays navbar list after clicking', () => {
        const button = screen.getByText(/Menu/i);
        const list = screen.getByRole('menu');
        userEvent.click(button);
        expect(button).toHaveAttribute('aria-expanded', 'true');
        expect(list).toBeVisible();
    });
    it('collapses and hides navbar list on clicking again', () => {
        const button = screen.getByText(/Menu/i);
        const list = screen.getByRole('menu');
        userEvent.dblClick(button);
        expect(button).toHaveAttribute('aria-expanded', 'false');
        expect(list).not.toBeVisible();
    });
});
