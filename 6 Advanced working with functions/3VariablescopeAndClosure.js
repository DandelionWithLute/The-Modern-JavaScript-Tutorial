console.log("Code Blocks:");
{
  let msg = "Hello";
  console.log(msg + " is inside of the block.");
}

// console.log(msg);

const makeCounter = () => {
  let c = 0;
  return function () {
    return c++;
  };
};

let counterZero = makeCounter();
console.log(counterZero);
console.log(counterZero());
console.log(counterZero());
console.log(counterZero());

// So, counter.[[Environment]] has the reference to {count: 0} Lexical Environment.
//  That’s how the function remembers where it was created, no matter where it’s called.
//  The [[Environment]] reference is set once and forever at function creation time.

console.log("Tasks:");
console.log("Does a function pickup latest changes?");
console.log("Which variables are available?");
console.log("IDK1:Are counters independent?");

function makeCounterSameFunc() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounterSameFunc();
let counter2 = makeCounterSameFunc();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // ?
console.log(counter2()); // ?

// Important
console.log("IDK2:Sum with closures");
const sum = (a) => {
  return function (b) {
    return a + b;
  };
};

console.log(sum(1)(-2));
console.log(sum(432)(21321));

let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
// P.S. There’s a pitfall
// the local variable x is known to the engine from the beginning of the function,
// but "uninitialized" (unusable) until let ("dead zone")
// hence the error

console.log("I didn't pass the parameter!");
