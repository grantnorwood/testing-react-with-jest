import React from 'react';
import { render, screen } from '../tests/test-utils';
import App from '../App';
import { getInitialStateForLoggedInUser, getInitialStateForUnauthenticatedUser } from '../utils/users';

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

it.skip('renders the login screen when user is logged in', () => {
  // First, we render the component
  render(<App defaultState={getInitialStateForLoggedInUser()} />);

  // Then we select the heading element
  const heading = screen.getByRole('heading', { name: /Current Balance/i });

  // Then we assert that the element is in the rendered document
  expect(heading).toBeInTheDocument();
});
