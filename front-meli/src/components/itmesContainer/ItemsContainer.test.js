import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ItemsContainer from './index';
import { arrayItems } from '../../_mocks_/itmesMock';

const MockItemsContainer = ({ items }) => (
    <BrowserRouter>
        <ItemsContainer items={arrayItems} />
    </BrowserRouter>
);

describe('ItemsContainer', () => {
    beforeEach(() => {
        render(<MockItemsContainer items={arrayItems} />);
    });

    it('renders correctly', () => {
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
    });

    it('should render the number of cards that are passed by the arrray', () => {
        const productCards = screen.getAllByRole('article');
        expect(productCards.length).toBe(4);
    });
});
