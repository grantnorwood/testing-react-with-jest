# Writing your first test

Our Piggy Bank app requires a user to login, so the default screen shows a welcome message and an input for the user's PIN.

Let's add a first test that ensures the Login screen is shown when the app starts.

1. Within a terminal window _(in VS Code, Terminal, iTerm, etc)_, ensure your app is running.
    
    _(See the "Start up the example application" section in the [README.md](../README.md) for more info.)_
    
2. In the `/src` directory where the `App.tsx` file is located, create a new folder called `__tests__` where all test files for this dir will be located.
  
    _(Each component will have its own `__tests__` folder which will contain the `*.test.jsx` files, as per the Jest convention.)_

3. Since the first file we want to test is our `App` component, create a new `__tests__/App.test.jsx` file, and paste the following code:
    
    ```jsx
    // piggy-bank/src/__tests__/App.test.jsx

    import React from 'react';
    import { render, screen } from '@testing-library/react';
    import App from '../App';

    it('renders the login screen when not logged in', () => {
      // First, we render the component
      render(<App />);

      // Then we select the heading element
      const heading = screen.getByText(/Welcome to PiggyBank/i);

      // Then we assert that the element is in the rendered document
      expect(heading).toBeInTheDocument();
    });
    ```

4. In a separate terminal window, run the Yarn command to run the test suite:
    
    ```bash
    cd piggy-bank
    yarn test
    ```

5. You'll see that your first test has passed because it found the text string you specified!
    
    ```bash
     PASS  src/__tests__/App.test.jsx

     Test Suites: 1 passed, 1 of 1 total
     Tests:       1 passed, 1 total
     Snapshots:   0 total
     Time:        2.436 s
     Ran all test suites related to changed files. 
     Watch Usage: Press w to show more.
    ```

6. To see what a failure looks like, delete a word from the `Welcome to PiggyBank` text in your query, and save the file.

This first simple test passed because you used React Testing Library's `screen.getByText()` function to search for `Welcome to PiggyBank` using a case-insensitive regular expression.

_(**Note:** You may use a simple quoted string, too ... but regular expressions make it easy to ignore character case should that ever change in your app.)_

**But there are a few things we need to address!**

1. `screen.getByText()` is a "query" function for finding a simple string, but **there are better queries you should almost always use instead!** _(Read more about [Query Priority](https://testing-library.com/docs/queries/about/#priority) in React Testing Library.)_
    - 💡 **Use `screen.getByRole()` for almost everything!**
    
2. We haven't yet tested that the PIN textbox & the button were rendered.
3. We need to test the interactions.  _(We'll do this in [Exercise 2](exercise-2.md).)_

_So let's address those first two items ..._

## Using `screen.getByRole()`

> You can query the returned element(s) by their [accessible name](https://www.w3.org/TR/accname-1.1/). The accessible name is for simple cases equal to e.g. the label of a form element, or the text content of a button, or the value of the aria-label attribute.

You'll use this query most of all, because as per the React Testing Library's [Guiding Principles](https://testing-library.com/docs/guiding-principles), using `screen.getByRole()` simulates the perspective of a real user using an "accessible" name.

_Let's update our first test to use the `screen.getByRole()` query instead ..._

In our first test, the welcome text we're looking for is an `h1`, and consulting the [list of roles](https://www.w3.org/TR/html-aria/#docconformance) tells us the accessible name is `heading`.

1. In your first test, update the query to the following, then save the file:
    
    ```javascript
    const heading = screen.getByRole('heading', { name: /Welcome to PiggyBank/i });
    ```
2. Notice that your terminal window is watching your test files, so your tests will be run again automatically!  You should see your test continue to pass.
3. To see this test fail, change `heading` to `button`.  You can expect this test to fail because the element is in fact an `h1`.

## Test that the textbox & button were rendered

Since we know that we should almost always use `screen.getByRole()`, let's use the appropriate accessible role names to verify the input box & button are rendered:

1. Within your first test, let's add a selector & assertion for the button:
    
    ```javascript
    const button = screen.getByRole('button', { name: /Login/i });

    expect(button).toBeInTheDocument();
    ```
    
    Save the file and watch your test pass again!

2. We'll need to use a different query for the textbox because it's an `<input type="password">` ... which doesn't use the standard `textbox` role.  So this time we'll use `screen.getByLabelText()`.  Since we want to select the input associated with the label `Please enter your PIN`, we'll do so as such:
    
    ```javascript
    const pin = screen.getByLabelText('Please enter your PIN');

    expect(pin).toBeInTheDocument();
    ```

✅ Nice!  Your first test is now checking that the appropriate elements of the Login component are being displayed when the app starts up.

However, we've only just begun ... we now need to add tests for each of the other components in our project, including ones which verify user interactions – like typing in textboxes & clicking buttons.

_Let's continue to [Exercise 2](exercise-2.md)!_

<hr>

## Solution code

```javascript
// piggy-bank/src/__tests__/App.test.jsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

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
```
