import moment from 'moment';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters';

test('should generate setStartDate', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate setEndDate', () => {
  const action = setEndDate(moment(0));

    expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(0)
    });
});

test('should generate setTextFilter', () => {
  const text = 'rent';
  const action = setTextFilter(text);

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate default setTextFilter', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate sortByDate', () => {
  const action = sortByDate();

  expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate sortByAmount', () => {
  const action = sortByAmount();

  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});
