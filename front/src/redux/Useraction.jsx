// userActions.js
export const setConnectedUser = (user) => ({
  type: 'SET_CONNECTED_USER',
  payload: {
    firstName: user.firstName,
    email: user.email,
  },
});
