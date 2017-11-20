import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expense from '../fixtures/expenses';

let onSubmit;
let history;
let wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() }
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
})

test('should render AddExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(expense[0]);
});