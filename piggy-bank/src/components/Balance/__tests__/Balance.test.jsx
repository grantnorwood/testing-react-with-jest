import React from 'react';
import { render, screen } from '../../../tests/test-utils';
import { getInitialStateForLoggedInUser } from '../../../utils/users'
import Balance, { balanceUnavailableMessage } from '../Balance';
import { formatUSCurrency } from '../../../utils/currency'

describe('components | Balance', () => {
  it('renders an error message when balance is unavailable', () => {
    // First, we render the component.  The user is not authenticated by default.
    render(<Balance />);

    // Then we select the heading & balance elements
    const heading = screen.getByRole('heading', { name: /Current Balance/i });
    const balance = screen.getByText(balanceUnavailableMessage);

    // Then we make our assertions
    expect(heading).toBeInTheDocument();
    expect(balance).toBeInTheDocument();
  });

  it('renders the balance screen when a user is logged in', () => {
    // First, we render the component
    const initialState = getInitialStateForLoggedInUser();

    render(<Balance />, {
      wrapperProps: { initialState },
    })

    // Then we select the heading & balance elements
    const heading = screen.getByRole('heading', { name: /Current Balance/i });
    const balance = screen.getByText(formatUSCurrency(initialState.account.balance));

    // Then we make our assertions
    expect(heading).toBeInTheDocument();
    expect(balance).toBeInTheDocument();
  });
});
