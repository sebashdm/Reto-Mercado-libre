import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../../features/store';
import Navbar from './index';

const MockNavbar = () => (
    <BrowserRouter>
     <Provider store={store}>
        <Navbar />
     </Provider>
    </BrowserRouter>
);

beforeEach(() => {
    render(<MockNavbar />);
});

describe('Navbar component', () => {
    it('renders on screen', () => {
        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
    });

    it('Contains Logo component', () => {
        const img = screen.getByAltText('Logo Mercado Libre');
        expect(img).toBeInTheDocument();
    });

    it('contains search box', () => {
        const input = screen.getByPlaceholderText('Buscar productos, marcas y más...');
        expect(input).toBeInTheDocument();
    });
});
