import authReducer from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should remove uid', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'blah' }, action);
  expect(state).toEqual({});
});

test('should add uid', () => {
  const action = {
    type: 'LOGIN',
    uid: 'uid123'
  };

  const state = authReducer({}, action);
  expect(state.uid).toEqual(action.uid);
});