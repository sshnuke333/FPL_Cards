import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card component renders', () => {
    beforeEach(() => {
        let player = {
            first_name: 'John',
            id: 1,
            second_name: 'Smith',
            value_season: '1',
            web_name: 'Smith',
            minutes: 1,
            ict_index_rank_type: 1,
        };
        render(<Card player={player} />);
    });

    it('a player img', () => {
        expect(
            screen.getByRole('img', {
                name: "John Smith's image",
            })
        ).toBeInTheDocument();
    });

    it("player's club badge ", () => {
        expect(screen.getByRole('img', { name: /badge/i })).toBeInTheDocument();
    });

    it('a four stat buttons', () => {
        let buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(4);
    });
});
