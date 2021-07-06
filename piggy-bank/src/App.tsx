import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Balance from './components/Balance/Balance';
import Deposit from './components/Deposit/Deposit';
import Header from './components/Header/Header';
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import Withdraw from './components/Withdraw/Withdraw'

/**
 * Set to true to bypass entering a pin during development, or false in production.
 *
 * (Yes, this might be better an .env file or `process.env` or something ...)
 */
export const isDevelopment = false;
export const defaultPIN = '1234';

export const DAILY_WITHDRAWL_LIMIT = 1000
export const DAILY_DEPOSIT_LIMIT = 5000

/**
 * Fetch from some fake db.
 */
const loadInitialAccountData = (): object => {
  return {
    balance: 4213.88
  }
}

interface AppState {
  isAuthenticated: boolean,
  user?: {
    name: string
  },
  account?: {
    balance?: number
  }
}

// Initial state based on development mode
const initialState: AppState = isDevelopment
  ? {
    isAuthenticated: true,
    user: {
      name: 'Grant'
    },
    account: loadInitialAccountData(),
  }
  : {
    isAuthenticated: false,
    user: null,
    account: null,
  }

// App context
// @ts-ignore
export const AppContext = React.createContext(initialState)

// @ts-ignore
export const appReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
      // TODO: Add real jwt token to localStorage
			localStorage.setItem('user', JSON.stringify(action.payload.user));
			return {
				...state,
				isAuthenticated: true,
        user: action.payload.user,
        account: loadInitialAccountData(),
			}
		case 'LOGOUT':
			localStorage.clear()
			return {
				...state,
				isAuthenticated: false,
				user: null,
			}
		case 'WITHDRAW':
			return {
				...state,
				account: {
          balance: action.payload.newBalance
        }
			}
		case 'DEPOSIT':
			return {
				...state,
				account: {
          balance: action.payload.newBalance
        }
			}
		default:
			return state
	}
}

function App() {
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
				<div className="app">
					<Header />
					<Switch>
						<Route path="/withdraw" exact>
							{state.isAuthenticated ? <Withdraw /> : <Redirect push to="/" />}
						</Route>
						<Route path="/deposit" exact>
							{state.isAuthenticated ? <Deposit /> : <Redirect push to="/" />}
						</Route>
						<Route path="/" exact>{state.isAuthenticated ? <Balance /> : <Login />}</Route>
            <Route>
              <NotFound />
            </Route>
					</Switch>
				</div>
			</Router>
		</AppContext.Provider>
  );
}

export default App;
