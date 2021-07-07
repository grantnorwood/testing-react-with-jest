import React from 'react';
import { render, screen } from '../../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import Withdraw from '../Withdraw';

describe('components | Deposit', () => {
  it('renders the withdraw screen', async () => {
    // First, we render the component
    render(<Withdraw />);

    // Then we select the heading & withdrawl elements
    const heading = screen.getByRole('heading', { name: /Make a Withdrawl/i });
    const deposit = screen.getByText('$4,213.88');
    const amount = screen.getByLabelText('How much bacon do you wanna bring home?');
    const button = screen.getByRole('button', { name: /Withdraw/i });

    // Then we make our assertions
    expect(heading).toBeInTheDocument();
    expect(deposit).toBeInTheDocument();

    userEvent.type(amount, '1000');
    userEvent.click(button);

    expect(await screen.findByText('$3,213.88')).toBeInTheDocument();
  });
});
