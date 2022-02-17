import React from 'react';
import { render } from '@testing-library/react';
import { Disclaimer } from './Disclaimer';

describe('Disclaimer', () => {
    it('renders', () => {
        render(<Disclaimer />);
    });
});
