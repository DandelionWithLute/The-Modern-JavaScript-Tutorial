// Scene Simulation: A singer promised to sing, but his studio later went on fire.

// A promise is a special JavaScript object
//  that links the “producing code” and the “consuming code” together.
// In terms of our analogy: this is the “subscription list”.
// The “producing code” takes whatever time it needs to produce the promised result,
// and the “promise” makes that result available to all of the subscribed code when it’s ready.

let promise = new Promise(function (resolve, reject) {
  // executor (the producing code, "singer")
  // if the job is finished successfully, with result value.
  // resolve(value);
  // if an error has occurred, error is the error object.
  // reject(error);
});
// There can be only a single result or an error
let promise2 = new Promise(function (resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});

// Reject with Error Objects

// Immediately calling resolve/reject
let promise3 = new Promise((resolve, reject) => {
  resolve(123);
});

// Delay with a promise
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log("runs after 3 seconds."));
