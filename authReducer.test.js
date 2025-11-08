import reducer from './authReducer';

test('sets user on LOGIN_SUCCESS', () => {
  const action = { type: 'LOGIN_SUCCESS', payload: { name: 'Bob' } };
  const state = reducer(undefined, action);
  expect(state.user.name).toBe('Bob');
});

test('clears user on LOGOUT', () => {
  const action = { type: 'LOGOUT' };
  const state = reducer({ user: { name: 'X' } }, action);
  expect(state.user).toBeNull();
});
