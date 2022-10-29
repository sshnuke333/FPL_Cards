import React from 'react';
import { render, screen } from '@testing-library/react';
import { Rules } from './Rules';

// provide player data for test

const player = {
    code: 209289,
    element_type: 3,
    first_name: 'Emile',
    now_cost: 58,
    second_name: 'Smith Rowe',
    team_code: 3,
    total_points: 103,
    value_season: '17.8',
    web_name: 'Smith Rowe',
    minutes: 1373,
    ict_index_rank_type: 26,
};

describe('Rules', () => {
    beforeEach(() => {
        render(<Rules player={player} />);
    });
    it('renders a heading', () => {
        expect(
            screen.getByRole('heading', { name: /Rules/i })
        ).toBeInTheDocument();
    });
    it('renders a list', () => {
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
    // if image is loaded, card is loaded
    it('renders card', () => {
        expect(screen.getByRole('img', { name: /Emile/i })).toBeInTheDocument();
    });
});
