import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Logo from './index';

const MockLogo = () => (
    <BrowserRouter>
        <Logo />
    </BrowserRouter>
);

describe('Logo Component', () => {
    it('render picture', () => {
        render(<MockLogo />);
        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();
    });

    it('contains link to redirect to home', () => {
        render(<MockLogo />);
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
    });
});
