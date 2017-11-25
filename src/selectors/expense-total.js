export default (expenses = []) => {
  return expenses
    .map(el => el.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};