import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addExpense,
  startAddExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const mockStore = configureStore([thunk]);

beforeEach((done) => {
  const expensesData = {};

  expenses.forEach(({ id, description, amount, createdAt, note }) => {
    expensesData[id] = { description, amount, createdAt, note }
  });

  database.ref('expenses').set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should remove expense from firebase', (done) => {
  const store = mockStore({});
  const id = expenses[2].id;

  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should edit expense on firebase', (done) => {
  const store = mockStore({});
  const id = expenses[2].id;
  const updates = { amount: 1000 };

  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });

    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(updates.amount);
    done();
  });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[1]);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[1]
  });
});

test('should add expense to DB and store', (done) => {
  const store = mockStore({});
  const expenseData = {
    description: 'Mouse',
    note: 'Blah',
    amount: 3000,
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with defaults to DB and store', (done) => {
  const store = mockStore({});
  const expenseDefault = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefault
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefault);
      done();
    });
});

test('should set up SET_EXPENSES action', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should get expenses from firebase', (done) => {
  const store = mockStore({});

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});