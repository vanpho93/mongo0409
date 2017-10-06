// Promise.resolve(100)
// .then(x => console.log(x));

Promise.reject(new Error('Something went wrong!'))
.then(x => console.log(x))
.catch(err => console.log(err.message));