import { render } from '@testing-library/react';
import Background from '../Background';

describe('Background', () => {
    it('renders correctly', () => {
        const { asFragment } = render(
            <Background gradientStart="white" gradientEnd="black" />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
