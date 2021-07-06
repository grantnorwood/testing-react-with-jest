import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to PiggyBank/i);
  expect(linkElement).toBeInTheDocument();
});
