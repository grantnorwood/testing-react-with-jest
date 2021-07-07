import React, { FC, ReactElement, useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react'
import appReducer from '../reducers/appReducer';
import { AppContext } from '../App'
import { getInitialStateForLoggedInUser } from '../utils/users';

const AllTheProviders: FC = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, getInitialStateForLoggedInUser());

  return (
    <AppContext.Provider
			value={{
        // @ts-ignore
				state,
				dispatch
			}}
		>
      <Router>
        {children}
      </Router>
    </AppContext.Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
