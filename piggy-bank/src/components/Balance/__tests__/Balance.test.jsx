import React from 'react';
import { render, screen } from '../../../tests/test-utils';
import Balance from '../Balance';

describe('components | Balance', () => {
  it('renders the balance screen', () => {
    // First, we render the component
    render(<Balance />);

    // Then we select the heading & balance elements
    const heading = screen.getByRole('heading', { name: /Current Balance/i });
    const balance = screen.getByText('$4,213.88');

    // Then we make our assertions
    expect(heading).toBeInTheDocument();
    expect(balance).toBeInTheDocument();
  });
});
