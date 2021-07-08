# Exercise 2: Determining if a user is logged in

- [Update `App.test.jsx` to include `initialState`](#update-apptestjsx-to-include-initialstate)
- [Create a new test to verify content displayed to a logged-in user](#create-a-new-test-to-verify-content-displayed-to-a-logged-in-user)
- [Grouping tests with `describe()`](#grouping-tests-with-describe)
- [Solution code](#solution-code)

<hr>

Our first test ensured that the login screen was being displayed to users who are not logged in upon the start of our application.  But in order to test that the appropriate content is displayed when a user has successfully authenticated, we're going to use a little magic  🧙‍♂️🕴✨🎩

## Update `App.test.jsx` to include `initialState`

1. Replace the code in your `App.test.jsx` file with the following:
    
    ```javascript
    import React from 'react'
    import { render, screen } from '../tests/test-utils'
    import App from '../App'
    import { getInitialStateForUnauthenticatedUser } from '../utils/users';

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
    ```

    _We can safely skip over the details, but here's essentially what has changed:_

    - We're now importing a custom `render()` function from `test-utils.tsx` which allows us to inject initial state for our tests _(`user` & `account` data, for example)_.
    - We've added an `import` statement to pull in a function which returns some mock data for an unauthenticated user
    - We're passing that `initialState` to our custom renderer via the `wrapperOptions` property
    
2. Save the file, and ensure your test is still passing.

💡 **We'll use this pattern going forward so that we can intentionally start each test with a valid user, or with no user at all!**

## Create a new test to verify content displayed to a logged-in user

We'll start by copy/pasting our first test just below, and updating the title to reflect the intent of the test.

1. Copy the first test & paste it below, then change the title to `renders the login screen when user is logged in`:
    
    ```javascript
    it('renders the login screen when user is logged in', () => {
      // we'll updated copied code next ...
    });
    ```

2. Next, we need to go through this second test and change a few things so that it uses a different function for `initialState`, so that it verifies that the Balance screen is displayed for a logged-in user.
    
    ![PiggyBank - Current balance](https://user-images.githubusercontent.com/707463/124867384-9cd75680-df83-11eb-8df6-b2d2a2142536.png)

    _This test should check that:_
    
    1. The `h1` heading displays `Current Balance` instead of the welcome message
    
    _Here's what this test should look like:_

    ```javascript
    it('renders the login screen when user is logged in', () => {
      // First, we render the component, injecting an initial state object representing an authenticated user
      //
      // NOTE: The extra `defaultState` prop is required for this one test because Grant needs to fix something that he broke 🙄
      render(<App defaultState={getInitialStateForLoggedInUser()} />, {
        wrapperProps: { initialState: getInitialStateForLoggedInUser() },
      })

      // Then we select the heading element
      const heading = screen.getByRole('heading', { name: /Current Balance/i });

      // Then we assert that the element is in the rendered document
      expect(heading).toBeInTheDocument();
    });
    ```

3. Save the file, and you should now see two passing tests!
    
    ![PiggyBank - App - 2 passing tests](https://user-images.githubusercontent.com/707463/124868257-1de31d80-df85-11eb-885c-efe8d330c578.png)

## Grouping tests with `describe()`

It's important to organize your tests for readability, and for clarity when something breaks.  Surrounding your `it()` blocks with `describe()` is a great way to group tests in whatever way makes sense to you.

1. We'll start by grouping our first two tests into one `describe()` block for the App component, like this:
    
    ```javascript
    describe('App', () => {
      it('renders the login screen when not logged in', () => {
        // ...
      });

      it('renders the login screen when user is logged in', () => {
        // ...
      });
    });
    ```

    _(You'll probably need to indent your two `it()` blocks so it's formatted correctly.)_

2. Save the file, and notice the small `App` label above your two grouped tests.
    
    ![PiggyBank - describe App](https://user-images.githubusercontent.com/707463/124869270-939bb900-df86-11eb-8447-185ada740302.png)

❗️ **From this point forward, each of our components will group their tests in a `describe()` block!**

<hr>

✅ Nice!  You've added a second test, enabled your tests to mock a logged-in user _(or an unauthenticated one)_, and you've learned to group your tests with `describe()`.

_Let's continue to [Exercise 3: Testing user interactions](exercise-3.md)!_

<hr>

## Solution code

```javascript
// piggy-bank/src/__tests__/App.test.jsx

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
```
