import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { Settings } from './Settings';

import { rootReducer } from '../store/rootReducer';

const store = configureStore({ reducer: rootReducer });

describe('Settings component renders', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Settings />
            </Provider>
        );
    });
    it('a start button', () => {
        expect(
            screen.getByRole('button', { name: /start/i })
        ).toBeInTheDocument();
    });
    it('a reset button', () => {
        expect(
            screen.getByRole('button', { name: /reset/i })
        ).toBeInTheDocument();
    });
    it('a settings button', () => {
        expect(
            screen.getByRole('button', { name: /settings/i })
        ).toBeInTheDocument();
    });
    it('a hidden options div', () => {
        expect(screen.getByLabelText(/options/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/options/i)).not.toBeVisible();
    });
    it('options has a range input in it', () => {
        const form = screen.getByLabelText(/options/i);
        expect(within(form).getByLabelText(/slider/i)).toBeInTheDocument();
    });
});

describe('settings button', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Settings />
            </Provider>
        );
    });
    it('is not expanded', () => {
        expect(
            screen.getByRole('button', { expanded: false })
        ).toBeInTheDocument();
    });
    it('on clicking displays form', () => {
        userEvent.click(screen.getByRole('button', { name: /settings/i }));
        expect(screen.getByLabelText(/options/i)).toBeVisible();
    });
    it('on clicking again hides form', () => {
        userEvent.dblClick(screen.getByRole('button', { name: /settings/i }));
        expect(screen.getByLabelText(/options/i)).not.toBeVisible();
    });
});
