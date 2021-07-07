import { loadInitialAccountData } from '../utils/users';

const appReducer = (state, action) => {
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

export default appReducer
