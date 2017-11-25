import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={100} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={3} expenseTotal={100000} />);
  expect(wrapper).toMatchSnapshot();
});