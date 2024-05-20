// let promise = Promise.all(iterable);

// Important
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
]).then(console.log);

let names = ["iliakan", "remy", "jeresig"];

let requests = names.map((name) => {
  fetch(`http://api.github.com/users/${name}`);
});

Promise.all(requests).then(console.log(requests));

// If any of the promises is rejected,
//  the promise returned by Promise.all immediately rejects with that error.
{
  //     Promise.all([
  //   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  //   new Promise((resolve, reject) =>
  //     setTimeout(() => reject(new Error("Whoops!")), 2000)
  //   ),
  //   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
  // ]).catch(alert); // Error: Whoops!
}
// Promise.all(iterable) allows non-promise “regular” values in iterable

// Can't use {} after => because resolve is not a func.
console.log("\nPromise.all here!")
// Promise.all([new Promise((resolve,reject)=>{setTimeout(()=>{resolve(1),1000})})]);
Promise.all([new Promise((resolve,reject)=>{setTimeout(()=>{resolve(1),1000})})]);

let summary = `
1.Promise.all(promises)-wait for all promises to resolve and returns an array of their results.
2.Promise.allSettled(promises) // Recently added
3.race method // but waits only for the first settled promise and gets its result (or error).
4.any method // Recently added
5.Promise.resolve(value) – makes a resolved promise with the given value.
6.Promise.reject(error) – makes a rejected promise with the given error.
`