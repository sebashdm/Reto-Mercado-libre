import { render, screen } from '@testing-library/react';
import Breadcrumbs from '.';

describe('Breadcrumbs component', () => {
    it('breadcrumbs renders', () => {
        render(<Breadcrumbs breadcrumbs={['Item 1', 'Item 2', 'Item 3']} />);
        const breadCrumbList = screen.getByRole('list');
        expect(breadCrumbList).toBeInTheDocument();
    });

    it('Renders array elements', () => {
        render(<Breadcrumbs breadcrumbs={['Item 1', 'Item 2', 'Item 3']} />);
        const listOfLinks = screen.getAllByRole('listitem');
        expect(listOfLinks.length).toBe(3);
    });

    it('Shows text', () => {
        render(<Breadcrumbs breadcrumbs={['Text 1', 'Link 2', 'Link 3']} />);
        const link = screen.getByText('Link 2');
        expect(link).toBeInTheDocument();
    });

});