
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ItemCard from './index';
import { mockItem } from '../../_mocks_/itemCardMock';

const MockItemCard = ({ item }) => {
    return (
        <BrowserRouter>
            <ItemCard item={item} />
        </BrowserRouter>
    );
};

describe('Componente <ProductCard />', () => {
    it('renders item card', () => {
        render(<MockItemCard item={mockItem} />);
        const article = screen.getByRole('article');
        expect(article).toBeInTheDocument();
    });

    it('Contains item title', () => {
        render(<MockItemCard item={mockItem} />);
        const title = screen.getByText('Cajita De Música Harry Potter Caja Musical Con Snitch Dorada');
        expect(title).toBeInTheDocument();
    });

    it('show formated price', () => {
        render(<MockItemCard item={mockItem} />);
        const price = screen.getByText('$3,400');
        expect(price).toBeInTheDocument();
    });

    it('shows seller location', () => {
        render(<MockItemCard item={mockItem} />);
        const location = screen.getByText('Capital Federal');
        expect(location).toBeInTheDocument();
    });

    it('contains item link', () => {
        render(<MockItemCard item={mockItem} />);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/items/MLA834500473');
    });
});
