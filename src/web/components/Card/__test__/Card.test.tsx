import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card component renders', () => {
    const player = {
        first_name: 'John',
        second_name: 'Smith',
        value_season: '1',
        web_name: 'Smith',
        minutes: 1,
        ict_index_rank_type: 1,
        total_points: 1,
    };
    const renderCard = (
        <Card
            player={player}
            zIndex="1"
            flip={false}
            handleStatClick={() => {}}
            animate={false}
        />
    );
    beforeEach(() => {
        render(renderCard);
    });
    it('renders correctly', () => {
        const { asFragment } = render(renderCard);
        expect(asFragment()).toMatchSnapshot();
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
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(4);
    });
});
