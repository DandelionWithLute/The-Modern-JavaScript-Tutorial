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

let counter = makeCounter();
console.log(counter);
console.log(counter());
console.log(counter());
console.log(counter());

// So, counter.[[Environment]] has the reference to {count: 0} Lexical Environment.
//  That’s how the function remembers where it was created, no matter where it’s called.
//  The [[Environment]] reference is set once and forever at function creation time.