// userReducer.js
const initialState = {
  connectedUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONNECTED_USER':
      return {
        ...state,
        connectedUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
