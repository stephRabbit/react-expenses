import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpense from '../selectors/expenses';
import getTotalExpense from '../selectors/expense-total';
import numeral from 'numeral';

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseText = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedTotal = numeral(expenseTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseText} totalling <span>{ formattedTotal }</span></h2>
        <div className="page-header__actions">
          <Link
            className="btn btn--green btn--lifted"
            to="/create"
          >
            Create Expense
          </Link>
        </div>
      </div>
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