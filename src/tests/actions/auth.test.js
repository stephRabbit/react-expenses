import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout } from '../../actions/auth';

const mockStore = configureStore([thunk]);

test('should create login user object', () => {
  const uid = 'blah';
  const action = login(uid);

  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should create logout user object', () => {
  const action = logout();

  expect(action).toEqual({
    type: 'LOGOUT',
  });
});