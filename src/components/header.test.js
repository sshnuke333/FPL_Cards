import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { Header } from './header';

describe('Header', () => {
    describe('it renders', () => {
        beforeEach(() => {
            render(<Header />);
        });

        it('a header element', () => {
            expect(screen.getByRole('banner')).toBeInTheDocument();
        });
        it('a navbar element', () => {
            expect(screen.getByRole('navigation')).toBeInTheDocument();
        });
        it('a clickable logo', () => {
            let logo = screen.getByRole('link', {
                name: /fpl\scards\shome\s/i,
            });
            expect(logo).toBeInTheDocument();
            expect(within(logo).getByRole('img')).toBeInTheDocument();
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
        it('a Play link in navbar', () => {
            const menu = screen.getByRole('menu');
            expect(
                within(menu).getByRole('link', { name: /Play/ })
            ).toBeInTheDocument();
        });
        it('a Disclaimer link in navbar', () => {
            const menu = screen.getByRole('menu');
            expect(
                within(menu).getByRole('link', { name: /Disclaimer/ })
            ).toBeInTheDocument();
        });
    });
});
