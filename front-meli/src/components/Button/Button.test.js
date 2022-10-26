import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

describe('Button component', () => {
    it('Renders', () => {
        render(<Button text='Button' />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('shows props text', () => {
        render(<Button text='buy' />);
        const button = screen.getByText('buy');
        expect(button).toBeInTheDocument();
    });

    it('lets pass props', () => {
        const mockFuntion = jest.fn();
        render(<Button text='buy' onClick={mockFuntion} />);
        const button = screen.getByText('buy');
        userEvent.click(button);
        expect(mockFuntion).toHaveBeenCalled();
    });
});
