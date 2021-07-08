import React, { ReactElement, useReducer } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, RenderOptions } from '@testing-library/react'
import appReducer from '../reducers/appReducer'
import { AppContext } from '../App'
import { getInitialStateForUnauthenticatedUser } from '../utils/users'

interface RenderOptionsWithWrapperProps extends RenderOptions {
  wrapperProps?: object
}

interface AllTheProvidersProps {
  initialState?: object
  children?: React.ReactNode
}

/**
 * The initial state defaults to an unauthenticated user.
 *
 * @returns React.FC
 */
const AllTheProviders = ({ initialState = getInitialStateForUnauthenticatedUser(), children }: AllTheProvidersProps) => {
	const [state, dispatch] = useReducer(appReducer, initialState);

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
  options?: Omit<RenderOptionsWithWrapperProps, 'wrapper'>,
) => render(ui, { wrapper: props => <AllTheProviders {...props} {...options?.wrapperProps} />, ...options })

export * from '@testing-library/react'
export { customRender as render }
