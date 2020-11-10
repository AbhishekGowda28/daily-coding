import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders movie text', () => {
  render(<App />);
  const linkElement = screen.getByText(/movie/i);
  expect(linkElement).toBeInTheDocument();
});
