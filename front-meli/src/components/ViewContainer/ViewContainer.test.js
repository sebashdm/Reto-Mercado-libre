import { screen, render } from '@testing-library/react';
import ViewContainer from '.';

describe('ViewContainer Component', () => {
    it('renders', () => {
        render(<ViewContainer />);
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
    });

    it('Render children', () => {
        render(
            <ViewContainer>
                <div>
                    <h3>This is my Meli Challenge</h3>
                </div>
            </ViewContainer>
        );
        const titles = screen.getAllByRole('heading');
        expect(titles.length).toBe(1);
    });
});
