import React from 'react';
import { connect } from 'react-redux';
import selectExpense from '../selectors/expenses';
import getTotalExpense from '../selectors/expense-total';
import numeral from 'numeral';

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseText = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedTotal = numeral(expenseTotal / 100).format('$0,0.00');
  return (
    <div>
      <h2>
        Viewing {expenseCount} {expenseText} totalling { formattedTotal }
      </h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpense = selectExpense(state.expenses, state.filters);

  return {
    expenseCount: visibleExpense.length,
    expenseTotal: getTotalExpense(visibleExpense)
  };
};

export default connect(mapStateToProps, null)(ExpenseSummary);