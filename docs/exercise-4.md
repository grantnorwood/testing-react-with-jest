# Exercise 4: Adding tests to other components

- [Add tests for the Balance component](#add-tests-for-the-balance-component)
- [Add tests for the Deposit component](#add-tests-for-the-deposit-component)
- [Add tests for the Withdraw component](#add-tests-for-the-withdraw-component)
- [Solution code](#solution-code)

<hr>

Now that you've learned the basics, it's time for you to write your own tests!

❗️ **Important**   
- For each component, create a new `__tests__` directory next to the component you will be testing, and name the test file similarly.
- You'll need to add `.test` to the filename, and replace the `.tsx` extension with `.jsx`.
- For example, for the `Balance` component, your directory would look like this:
    
   ```
   - piggy-bank
     ↳ src
       ↳ components
         ↳ Balance
           ↳ __tests__
             ↳ Balance.test.jsx
           ↳ Balance.tsx
   ```

## Add tests for the Balance component

👩‍💻 **Test requirements** – Write tests to cover the following functionality:

1. When a user is **not** logged in:
   1. The component should render the "Current Balance" heading
   2. The component should render an error message when balance is unavailable _(hint: use the exported `balanceUnavailableMessage`)_
2. When a user is authenticated:
   1. The component should render the "Current Balance" heading
   2. The component should render the balance amount from the mock data, in US currency format: `$4,213.88`.

## Add tests for the Deposit component

👩‍💻 **Test requirements** – Write a test to cover the following functionality:

_When a user is authenticated:_

1. The component should render the "Make a Deposit" heading
2. The component should render the starting balance amount from the mock data, in US currency format: `$4,213.88`.
3. Simulate a user depositing $1000 by using `userEvent.type()` to input `1000` into the textbox.
4. Simulate a user clicking the "Deposit" button using `userEvent.click()`.
5. Assert that the new balance displayed is accurately increased by $1000. _(hint: use `await screen.findByText()` to cause React Testing Library to wait for the new balance text to appear, as it may take a second for the data to be saved.)_

## Add tests for the Withdraw component

👩‍💻 **Test requirements** – Write a test to cover the following functionality:

_When a user is authenticated:_

1. The component should render the "Make a Withdrawl" heading
2. The component should render the starting balance amount from the mock data, in US currency format: `$4,213.88`.
3. Simulate a user withdrawing $1000 by using `userEvent.type()` to input `1000` into the textbox.
4. Simulate a user clicking the "Withdraw" button using `userEvent.click()`.
5. Assert that the new balance displayed is accurately decreased by $1000. _(hint: use `await screen.findByText()` to cause React Testing Library to wait for the new balance text to appear, as it may take a second for the data to be saved.)_

<hr>

✅ Fantastic work, you've finished all of the exercises & you're ready to go forth and test all the things!

<hr>

## Solution code

🚀 _You may view the complete solution code for all the tests we've written today in the [`solution` branch](https://github.com/grantnorwood/testing-react-with-jest/tree/solution) of this repo._
