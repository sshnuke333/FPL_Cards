import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from './NotFound';

describe('NotFound', () => {
    it('renders 404 page', () => {
        render(<NotFound />);
        expect(screen.getByText(/404/i)).toBeInTheDocument();
    });
});
