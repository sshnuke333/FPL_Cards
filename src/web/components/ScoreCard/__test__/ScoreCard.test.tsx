import { render } from '@testing-library/react';
import ScoreCard from '../ScoreCard';

describe('ScoreCard', () => {
    it('renders successfully', () => {
        const { asFragment } = render(
            <ScoreCard playerLeft="1" opponentLeft="1" />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
