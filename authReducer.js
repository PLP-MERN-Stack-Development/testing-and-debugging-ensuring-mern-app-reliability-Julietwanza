const initialState = { user: null };

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
}
