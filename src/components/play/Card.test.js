import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card component renders', () => {
    beforeEach(() => {
        render(<Card />);
    });
    it('a player img', () => {
        expect(
            screen.getByRole('img', { name: /player/i })
        ).toBeInTheDocument();
    });
    it("a player's club image ", () => {
        expect(screen.getByRole('img', { name: /club/i })).toBeInTheDocument();
    });
    it('a stat button', () => {
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});
