import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './state';

describe('App', () => {
    it('renders', () => {
        render(
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        );
    });
});
