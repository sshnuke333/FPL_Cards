import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card component renders', () => {
    beforeEach(() => {
        let player = {
            code: 153256,
            element_type: 3,
            first_name: 'Mohamed Naser',
            id: 12,
            points_per_game: '1.6',
            second_name: 'El Sayed Elneny',
            team_code: 3,
            total_points: 11,
            value_season: '2.5',
            web_name: 'Elneny',
            minutes: 171,
            ict_index_rank_type: 173,
        };
        render(<Card player={player} />);
    });

    it('a player img', () => {
        expect(
            screen.getByRole('img', {
                name: "Mohamed Naser El Sayed Elneny's image",
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
