import React from 'react';
import { render, screen } from '../../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import Deposit from '../Deposit';

describe('components | Deposit', () => {
  it.skip('renders the deposit screen', async () => {
    // First, we render the component
    render(<Deposit />);

    // Then we select the heading & deposit elements
    const heading = screen.getByRole('heading', { name: /Make a Deposit/i });
    const deposit = screen.getByText('$4,213.88');
    const amount = screen.getByLabelText('How much of that truffle money do you want to put in the bank?');
    const button = screen.getByRole('button', { name: /Deposit/i });

    // Then we make our assertions
    expect(heading).toBeInTheDocument();
    expect(deposit).toBeInTheDocument();

    userEvent.type(amount, '1000');
    userEvent.click(button);

    expect(await screen.findByText('$5,213.88')).toBeInTheDocument();
  });
});
