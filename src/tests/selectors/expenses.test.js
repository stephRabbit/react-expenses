import selectExpenses from '../../selectors/expenses';
import expenseData from '../fixtures/expenses';
import moment from 'moment';


test('should filter text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenseData, filters);

  expect(result).toEqual([
    expenseData[2],
    expenseData[0]
  ]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExpenses(expenseData, filters);

  expect(result).toEqual([
    expenseData[2],
    expenseData[0]
  ])
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };
  const result = selectExpenses(expenseData, filters);

  expect(result).toEqual([
    expenseData[0],
    expenseData[1]
  ])
});

test('should filter by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenseData, filters);

  expect(result).toEqual([
    expenseData[2],
    expenseData[0],
    expenseData[1]
  ]);
});

test('should filter by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenseData, filters);

  expect(result).toEqual([
    expenseData[0],
    expenseData[2],
    expenseData[1]
  ]);
});