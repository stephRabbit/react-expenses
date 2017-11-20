import moment from 'moment';

export default [
  {
    id: '1',
    note: 'note',
    description: 'Rent',
    createdAt: 0,
    amount: 1000
  },
  {
    id: '2',
    note: 'note2',
    description: 'Gum',
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    amount: 100
  },
  {
    id: '3',
    note: 'note3',
    description: 'Credit Card',
    createdAt: moment(0).add(4, 'days').valueOf(),
    amount: 500
  }
];