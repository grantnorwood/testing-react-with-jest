# Exercise 3: Testing user interactions

- [Test login with a valid PIN](#test-login-with-a-valid-pin)
- [Test login with an invalid PIN](#test-login-with-an-invalid-pin)
- [Solution code](#solution-code)

<hr>

Now that our first two tests have verified that the App is rendered appropriately based on a user being logged in, we now want to test that the Login form works!

Since we want to write our test code with our user in mind, here are the things we want to test:

1. When the user inputs the correct PIN _(e.g., `1234`)_, and clicks the "Login" button, the user should be logged in & their balance should be displayed.
2. When the user inputs an invalid PIN, they should be shown an error message.

## Test login with a valid PIN

Now let's ask your test to attempt to login with a valid PIN.

1. Add a new `import` statement at the top of your App component's test file:
    
    ```javascript
    import userEvent from '@testing-library/user-event'
    ```

2. Add a new `it()` block below your existing tests, and copy the code below:
    
    ```javascript
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
    ```

3. Save the file, and you'll now see 3 passing tests!

⭐️ **Above we've introduced some new query methods in React Testing Library!**

- **`screen.getByLabelText()`** is used for certain input elements that don't use the standard "accessible name" of `textbox`, like password fields.  This new query will look for the text input associated with the specified label text, which in our example is "Please enter your PIN".
- **`await screen.findByText()`** is used for waiting asynchronously for some text to appear, even if it takes a little while. Behind the scenes, RTL is using JavaScript Promises to **resolve** once the text appears, or **reject** if the text doesn't appear before the query timeout expires.
- **`userEvent.type()` and `userEvent.click()`** are used to simulate a user taking an action, like typing in a text field or clicking a button.

## Test login with an invalid PIN

Now let's ask your test to verify that an invalid PIN will result in an error message.

1. Duplicate your `it('allows the user to login with a valid PIN')` test, and rename it to reflect that we're testing for an invalid PIN:
    
    ```javascript
    it('displays an error when a user attempts to log in with an invalid PIN', async () => {
      // ...
    })
    ```

2. Then, change the PIN in your test to something invalid _(e.g., `abcd`)_.
3. And update your assertion to look for the `Incorrect PIN` error message.
4. Save the file, and ensure that all your tests are passing!

<hr>

✅ Great job! You've now learned enough to begin adding tests for other components.

_Let's continue to [Exercise 4: Adding tests to other components](exercise-4.md)!_

<hr>

## Solution code

```javascript
// piggy-bank/src/__tests__/App.test.jsx

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

  it('displays an error when a user attempts to log in with an invalid PIN', async () => {
    // First, we render the component
    render(<App />, {
      wrapperProps: { initialState: getInitialStateForUnauthenticatedUser() },
    })

    // Then we select the input element. (We don't need to assert here, because this line will fail if the element isn't found as it is a `getBy*` query.)
    const pin = screen.getByLabelText('Please enter your PIN')
    const button = screen.getByRole('button', { name: /Login/i })

    // Then we type the PIN & submit the form by clicking the button (just as a user would!)
    userEvent.type(pin, 'abcd')
    userEvent.click(button)

    // NOTE: We could also test pressing the {enter} key, as the login action occurs on form submit.
    const errorMessage = await screen.findByText(/Incorrect PIN/i)

    // Assert that the Balance screen's heading is displayed correctly
    expect(errorMessage).toBeInTheDocument()
  })
});
```
