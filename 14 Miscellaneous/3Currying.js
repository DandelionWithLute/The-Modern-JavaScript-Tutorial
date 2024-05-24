// Important
function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2));

// Advanced curry implementation
function curryAdv(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
          return func.apply(this, args);
        } else {
          return function(...args2) {
            return curried.apply(this, args.concat(args2));
          }
        }
      };
}
const sum3 = (a, b, c) => a + b + c;

let curriedSumAdv = curry(sum3);
console.log(curriedSumAdv(1, 2, 3));
console.log(curriedSumAdv(1), (2, 3));
// console.log(curriedSumAdv(1)(2)(3));


// Important: Function.prototype.apply()
const numbers = [5, 6, 2, 3, 7];
// 
const max = Math.max.apply(null, numbers);
// 
console.log(max);
// Expected output: 7
// 
const min = Math.min.apply(null, numbers);
// 
console.log(min);
// Expected output: 2

// Examples:Using apply() to append an array to another
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
