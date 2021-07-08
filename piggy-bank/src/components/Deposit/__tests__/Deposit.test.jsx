import React from 'react';
import { render, screen } from '../../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import Deposit from '../Deposit';
import { getInitialStateForLoggedInUser } from '../../../utils/users';

describe('components | Deposit', () => {
  it('renders the deposit screen and allows a user to make a deposit', async () => {
    // First, we render the component
    render(<Deposit />, {
      wrapperProps: { initialState: getInitialStateForLoggedInUser() },
    })

    // Then we select the heading & deposit elements
    const heading = screen.getByRole('heading', { name: /Make a Deposit/i });
    const deposit = screen.getByText('$4,213.88');
    const amount = screen.getByLabelText('How much of that truffle money do you want to put in the bank?');
    const button = screen.getByRole('button', { name: /Deposit/i });

    // Then we make our assertions
    expect(heading).toBeInTheDocument();
    expect(deposit).toBeInTheDocument();

    // The user makes a $1000 deposit
    userEvent.type(amount, '1000');
    userEvent.click(button);

    expect(await screen.findByText('$5,213.88')).toBeInTheDocument();
  });
});
