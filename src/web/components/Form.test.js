import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

describe('Form component', () => {
    beforeEach(() => {
        render(<Form />);
    });
    it('renders a range input', () => {
        expect(screen.getByLabelText('slider')).toBeInTheDocument();
    });
    it('renders a output', () => {
        expect(screen.getByLabelText('status')).toBeInTheDocument();
    });
    it('renders a label for input', () => {
        expect(screen.getByText(/choose/i)).toBeInTheDocument();
    });
});
