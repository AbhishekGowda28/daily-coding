import React from 'react';
import { render } from '@testing-library/react';
import Controllers from '../Controllers';

test('renders learn react link', () => {
    const { getByText } = render(<Controllers />);
    const linkElement = getByText(/Controllers/i);
    expect(linkElement).toBeInTheDocument();
});
