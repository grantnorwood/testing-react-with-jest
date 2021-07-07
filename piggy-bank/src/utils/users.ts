/**
 * Fetch from some fake account data.
 */
export const loadInitialAccountData = (): object => {
  return {
    balance: 4213.88
  }
}

/**
 * Some fake initial state for a logged-in user.
 */
export const getInitialStateForLoggedInUser = () => {
  return {
    isAuthenticated: true,
    user: {
      name: 'Grant'
    },
    account: loadInitialAccountData(),
  };
};

/**
 * Some fake initial state for an unauthenticated user.
 */
export const getInitialStateForUnauthenticatedUser = () => {
  return {
    isAuthenticated: false,
    user: null as any,
    account: null as any,
  };
};
