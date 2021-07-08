import React from 'react';
import userEvent from '@testing-library/user-event'
import { render, screen } from '../tests/test-utils';
import App from '../App';
import { getInitialStateForLoggedInUser, getInitialStateForUnauthenticatedUser } from '../utils/users';

describe('App', () => {
  it('renders the login screen when not logged in', () => {
    // First, we render the component
    render(<App />, { wrapperProps: { initialState: getInitialStateForUnauthenticatedUser() }});

    // Then we select the heading element
    const heading = screen.getByRole('heading', { name: /Welcome to PiggyBank/i });
    const button = screen.getByRole('button', { name: /Login/i });
    const pin = screen.getByLabelText('Please enter your PIN');

    // Then we assert that the element is in the rendered document
    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(pin).toBeInTheDocument();
  });

  it('renders the login screen when user is logged in', () => {
    // First, we render the component.
    //
    // TODO: Break out the App component so we don't have to hack this `defaultState` prop.
    //       There's some duplication that needs to be remedied when testing just this App component!
    //
    render(<App defaultState={getInitialStateForLoggedInUser()} />, {
      wrapperProps: { initialState: getInitialStateForLoggedInUser() },
    })

    // Then we select the heading element
    const heading = screen.getByRole('heading', { name: /Current Balance/i });

    // Then we assert that the element is in the rendered document
    expect(heading).toBeInTheDocument();
  });

  it('allows the user to login with a valid PIN', async () => {
    // First, we render the component
    render(<App />, {
      wrapperProps: { initialState: getInitialStateForUnauthenticatedUser() },
    })

    // Then we select the input element. (We don't need to assert here, because this line will fail if the element isn't found as it is a `getBy*` query.)
    const pin = screen.getByLabelText('Please enter your PIN')
    const button = screen.getByRole('button', { name: /Login/i })

    // Then we type the PIN & submit the form by clicking the button (just as a user would!)
    userEvent.type(pin, '1234')
    userEvent.click(button)

    // NOTE: We could also test pressing the {enter} key, as the login action occurs on form submit.
    const heading = await screen.findByText(/Current Balance/i)

    // Assert that the Balance screen's heading is displayed correctly
    expect(heading).toBeInTheDocument()
  })
});
