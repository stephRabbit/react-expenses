import expensesReducer from '../../reducers/expenses';
import expenseData from '../fixtures/expenses';

test('should setup defalut expenses values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should REMOVE_EXPENSE id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenseData[0].id
  };
  const state = expensesReducer(expenseData, action);

  expect(state).toEqual([
    expenseData[1],
    expenseData[2]
  ])
});

test('should not REMOVE_EXPENSE id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenseData, action);

  expect(state).toEqual(expenseData)
});

test('should ADD_EXPENSE', () => {
  const expense = {
    id: '4',
    note: 'note',
    description: 'Rent',
    createdAt: 20000,
    amount: 1000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenseData, action);

  expect(state).toEqual([...expenseData, expense]);
});

test('should EDIT_EXPENSE', () => {
  const edit = 'Edited';
  const action = {
    id: expenseData[0].id,
    type: 'EDIT_EXPENSE',
    updates: {
      description: edit
    }
  };

  const state = expensesReducer(expenseData, action);
  expect(state[0].description).toBe(edit)
});

test('should not EDIT_EXPENSE', () => {
  const edit = 'Edited';
  const action = {
    id: '1000',
    type: 'EDIT_EXPENSE',
    updates: {
      description: edit
    }
  };

  const state = expensesReducer(expenseData, action);
  expect(state).toEqual(expenseData)
});