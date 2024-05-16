class Animal {
  eat() {
    return "Yum Yum";
  }
}

class Amphibia {}

let rabbit = new Animal();
console.log("Is rabbit the instance of Animal class?");
console.log(rabbit instanceof Animal);
console.log("Is rabbit the instance of Amphibia class?");
console.log(rabbit instanceof Amphibia);

console.log();
let arr = [];
console.log(arr instanceof Array);
console.log(arr instanceof Object);
console.log()

//////////////////////////////////////////////////

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log(a instanceof B);
// Important
// In the code below, why does instanceof return true?
//  We can easily see that a is not created by B().


// And here a.__proto__ == B.prototype, so instanceof returns true.

