# Testing user interactions

Let's make sure that our `Login` component is working correctly.  Here are the things we want to test:

1. When the user inputs the correct PIN _(e.g., `1234`)_, and clicks the "Login" button, the user should be logged in & their balance should be displayed.
2. When the user inputs an invalid PIN, they should be shown an error message.

## Create a new `Login.test.jsx` file

❗️ **Important:** We began writing tests around the Login screen in [Exercise 1](exercise-1.md) within our `App.test.jsx` file, but we should really be colocating a component's tests alongside the component itself instead!

_Let's begin by making a copy of our first test file, and then adding some new tests to verify the form works ..._

1. Copy your `App.test.jsx` file into the Login component's dir, and inside a new `__tests__` directory as you did before:
    
    ```javascript
    // piggy-bank/src/components/Login/__tests__/Login.test.jsx

    import React from 'react';
    import { render, screen } from '@testing-library/react';
    import Login from '../Login';

    it('renders the login screen when not logged in', () => {
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
    ```
2. Save the file, and notice that now your terminal informs you that your number of tests & test suites has increased, and they're both passing:
    
    ```bash
    PASS  src/__tests__/App.test.jsx
    PASS  src/components/Login/__tests__/Login.test.jsx

    Test Suites: 2 passed, 2 total
    Tests:       2 passed, 2 total
    Snapshots:   0 total
    Time:        2.498 s, estimated 3 s
    Ran all test suites related to changed files.

    Watch Usage: Press w to show more.
    ```

## Test login with a valid PIN

Now let's ask your test to attempt to login with a valid PIN.

1. Add a new `import` statement at the top of your Login component's test file:
    
    ```javascript
    import userEvent from '@testing-library/user-event'
    ```

2. Add a new `it()` block below your existing test, and copy the code below:
    
    ```javascript

    ```

## Use `describe` to group your tests
