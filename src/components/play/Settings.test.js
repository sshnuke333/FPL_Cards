import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Settings } from './Settings';

describe('Settings component', () => {
    beforeEach(() => {
        render(<Settings />);
    });
    it('renders', () => {});
});
