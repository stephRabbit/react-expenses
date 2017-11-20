import { addExpense, removeExpense, editExpense } from '../../actions/expenses';
import uuid from 'uuid';

test('should set remove expense action object', () => {
  const action = removeExpense({ id: '1234' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234'
  });
});

test('should set edit expense action object', () => {
  const action = editExpense('1234', { note: 'Something' });

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234',
    updates: {
      note: 'Something'
    }
  });
});

test('should setup action object with provided values', () => {
  const expenseData = {
    description: 'Desc',
    note: 'Note',
    amount: 1000,
    createdAt: -1000
  };
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  });
});

test('should setup action object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
})