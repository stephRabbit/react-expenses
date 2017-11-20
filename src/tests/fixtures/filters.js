import moment from 'moment';

export const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

export const altFilters = {
  text: 'Bills',
  sortBy: 'amount',
  startDate: moment(0).startOf('month'),
  endDate: moment(0).add(3, 'days')
};