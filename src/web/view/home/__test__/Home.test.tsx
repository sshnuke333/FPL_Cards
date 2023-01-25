import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../state';

import Home from '../Home';

describe('Home', () => {
    it('renders successfully', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
