# Exercise 3: Testing user interactions

Let's make sure that our `Login` component is working correctly.  Here are the things we want to test:

1. When the user inputs the correct PIN _(e.g., `1234`)_, and clicks the "Login" button, the user should be logged in & their balance should be displayed.
2. When the user inputs an invalid PIN, they should be shown an error message.

(...)
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
