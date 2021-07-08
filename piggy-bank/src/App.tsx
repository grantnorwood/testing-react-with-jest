import React, { useReducer } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import appReducer from './reducers/appReducer'
import {
  getInitialStateForLoggedInUser,
  getInitialStateForUnauthenticatedUser,
} from './utils/users'
import './App.css'

import Balance from './components/Balance/Balance'
import Deposit from './components/Deposit/Deposit'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import Withdraw from './components/Withdraw/Withdraw'

/**
 * Set to true to bypass entering a pin during development, or false in production.
 *
 * (Yes, this might be better an .env file or `process.env` or something ...)
 */
export const isDevelopment = false
export const defaultPIN = '1234'

export const DAILY_WITHDRAWL_LIMIT = 1000
export const DAILY_DEPOSIT_LIMIT = 5000

interface AppState {
  isAuthenticated: boolean
  user?: {
    name: string
  }
  account?: {
    balance?: number
  }
}

// The default state based on development mode
const initialState: AppState = isDevelopment
  ? getInitialStateForLoggedInUser()
  : getInitialStateForUnauthenticatedUser()

// App context
export const AppContext = React.createContext<AppState>(initialState)

function App({ defaultState = initialState }) {
  const [state, dispatch] = useReducer(appReducer, defaultState)

  return (
    <AppContext.Provider
      value={{
        // @ts-ignore
        state,
        dispatch,
      }}
    >
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/withdraw" exact>
              {state.isAuthenticated ? <Withdraw /> : <Redirect push to="/" />}
            </Route>
            <Route path="/deposit" exact>
              {state.isAuthenticated ? <Deposit /> : <Redirect push to="/" />}
            </Route>
            <Route path="/" exact>
              {state.isAuthenticated ? <Balance /> : <Login />}
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  )
}

export default App
