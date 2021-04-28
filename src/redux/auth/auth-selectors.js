// const getIsAuthenticated = state => Boolean(state.auth.token);

const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const getLoading = state => state.auth.loading;

export default { getIsAuthenticated, getUserName, getLoading };
