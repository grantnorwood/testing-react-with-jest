import React from 'react'
import { render, screen } from '../tests/test-utils'
import App from '../App'
import {
  getInitialStateForUnauthenticatedUser,
  getInitialStateForLoggedInUser,
} from '../utils/users'

describe('App', () => {
  it('renders the login screen when not logged in', () => {
    // First, we render the component, injecting an initial state object representing a user who is NOT logged in
    render(<App />, {
      wrapperProps: { initialState: getInitialStateForUnauthenticatedUser() },
    })

    // Then we select the heading element
    const heading = screen.getByRole('heading', {
      name: /Welcome to PiggyBank/i,
    })
    const button = screen.getByRole('button', { name: /Login/i })
    const pin = screen.getByLabelText('Please enter your PIN')

    // Then we assert that the element is in the rendered document
    expect(heading).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(pin).toBeInTheDocument()
  })

  it('renders the login screen when user is logged in', () => {
    // First, we render the component, injecting an initial state object representing an authenticated user
    //
    // NOTE: The extra `defaultState` prop is required for this one test because Grant needs to fix something that he broke 🙄
    render(<App defaultState={getInitialStateForLoggedInUser()} />, {
      wrapperProps: { initialState: getInitialStateForLoggedInUser() },
    })

    // Then we select the heading element
    const heading = screen.getByRole('heading', { name: /Current Balance/i })

    // Then we assert that the element is in the rendered document
    expect(heading).toBeInTheDocument()
  })
})
