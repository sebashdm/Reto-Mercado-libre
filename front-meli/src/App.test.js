import { screen, render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './features/store.js'
import App from './App';

const MockApp = () => (
    <BrowserRouter>
      <Provider store={store}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </Provider>
    </BrowserRouter>
);

describe('App component', () => {
    beforeEach(() => {
        render(<MockApp />);
    });

    it('Navbar render', () => {
        const nav = screen.getByRole('navigation');
        const input = screen.getByPlaceholderText('Buscar productos, marcas y más...');
        expect(nav).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });
});
