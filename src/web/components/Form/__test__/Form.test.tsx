import { render, screen } from '@testing-library/react';
import Form from '../Form';

describe('Form component', () => {
    beforeEach(() => {
        render(<Form updateStatus={() => {}} />);
    });
    it('renders correctly', () => {
        const { asFragment } = render(<Form updateStatus={() => {}} />);
        expect(asFragment()).toMatchSnapshot();
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
