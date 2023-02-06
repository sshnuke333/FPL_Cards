import { render } from '@testing-library/react';
import NotFound from '../NotFound';

describe('NotFound', () => {
    it('renders 404 page', () => {
        const { asFragment } = render(<NotFound />);
        expect(asFragment()).toMatchSnapshot();
    });
});
