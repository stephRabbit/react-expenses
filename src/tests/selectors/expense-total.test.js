import expenses from '../fixtures/expenses';
import getTotalExpense from '../../selectors/expense-total';

test('should return 0 if no expenses', () => {
  const total = getTotalExpense([]);
  expect(total).toBe(0);
});

test('should correctly add single expenses', () => {
  const total = getTotalExpense([expenses[1]]);
  expect(total).toBe(109500);
});

test('should correctly add multiple expenses', () => {
  const total = getTotalExpense(expenses);
  expect(total).toBe(114195)
});