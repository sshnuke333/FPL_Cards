import { render } from '@testing-library/react';
import Disclaimer from '../Disclaimer';

describe('Disclaimer', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<Disclaimer />);
        expect(asFragment()).toMatchSnapshot();
    });
});
