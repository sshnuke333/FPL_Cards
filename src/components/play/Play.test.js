import React from 'react';
import { render, screen } from '@testing-library/react';
import { Play } from './Play';

describe('Play Component', () => {
    it('renders', () => {
        render(<Play />);
    });
    it('renders settings component', () => {
        render(<Play />);
        expect(screen.getByTestId('settings')).toBeInTheDocument();
    });
});
