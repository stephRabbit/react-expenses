const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      item: 'success',
      name: 'Gizmo',
      age: 4
    });
    //reject('Error!!!!!!');
  }, 5000);
});

promise.then((data) => {
  console.log('One: ', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Nested promise return!');
    }, 5000);
  });
})
.then((obj) => {
  console.log(obj, 'does this run?');
})
.catch((error) => {
  console.log(error);
});