import { render, screen } from '@testing-library/react';
import Container from '.';

describe('Container component />', () => {
    it('Render children', () => {
        render(
            <Container>
                <h1>Title</h1>
            </Container>
        );
        const title = screen.getByRole('heading');
        expect(title).toBeInTheDocument();
    });
});
