import React from 'react';
import { render } from '@testing-library/react';
import { ScoreCard } from './ScoreCard';

describe('ScoreCard', () => {
    it('renders successfully', () => {
        render(<ScoreCard />);
    });
});
