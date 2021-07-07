import React from 'react';
import { render, screen } from '../../../tests/test-utils';
// import userEvent from '@testing-library/user-event';
import Login from '../Login';

describe('components | Login', () => {
  it('renders the login form when not logged in', () => {
    // First, we render the component
    render(<Login />);

    // Then we select the heading element
    const heading = screen.getByRole('heading', { name: /Welcome to PiggyBank/i });
    const button = screen.getByRole('button', { name: /Login/i });
    const pin = screen.getByLabelText('Please enter your PIN');

    // Then we assert that the element is in the rendered document
    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(pin).toBeInTheDocument();
  });

  /**
   * TODO: Fix the `dispatch()` within AppContext issue
   */
  // it.skip('allows the user to login with a valid PIN', async () => {
  //   // First, we render the component
  //   render(<Login />);

  //   // Then we select the input element. (We don't need to assert here, because this line will fail if the element isn't found as it is a `getBy*` query.)
  //   const pin = screen.getByLabelText('Please enter your PIN');
  //   const button = screen.getByRole('button', { name: /Login/i });

  //   // Then we type the PIN & submit the form by clicking the button (just as a user would!)
  //   userEvent.type(pin, '1234');
  //   userEvent.click(button);

  //   // NOTE: We could also test pressing the {enter} key, as the login action occurs on form submit.
  //   const heading = await screen.findByRole('heading', { name: /Current Balance/i, timeout: 2000 });

  //   // Assert that the Balance screen's heading is displayed correctly
  //   expect(heading).toBeInTheDocument();
  // });
});
