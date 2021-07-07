import React from 'react';
import { render, screen } from '../tests/test-utils';
import App/* , { AppContext, appReducer } */ from '../App';
// import { getInitialStateForLoggedInUser } from '../utils/users';

it('renders the login screen when not logged in', () => {
  // First, we render the component
  render(<App />);

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
// it.skip('renders the balance screen when a user is logged in', () => {
//   // First, we get some intial state.
//   const initialState = getInitialStateForLoggedInUser();

//   // Then we render the component within the AppContext
//   const [state, dispatch] = useReducer(appReducer, initialState);
//   render(
//     <AppContext.Provider
// 			value={{
// 				state,
// 				dispatch
// 			}}
// 		>
//       <App />
//     </AppContext.Provider>);

//   // Then we assert that the element is in the rendered document
//   const heading = screen.getByRole('heading', { name: /Current Balance/i });
//   expect(heading).toBeInTheDocument();
// });
