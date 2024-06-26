let obj = {};
console.log(obj);
// [object Object] on browser

console.log(obj.__proto__ === Object.prototype);

console.log(obj.toString() === obj.__proto__.toString());

console.log(obj.toString === Object.prototype.toString);

console.log(Object.prototype.__proto__);

let bigString = `

 [1,2,3]                => Array.prototype      => 
 function f(args){...}  => Function.prototype   => Object.prototype
 5 => Number.prototype  => Object.prototype     =>
    
`;
console.log(bigString);

//////////////////////////////////////////////////
console.log('Task1:Add method "f.defer(ms)" to functions');
// function f(time) {
//   return (self.defer = setTimeout(() => {
//     console.log("Hello");
//   }, time));
// }
// TypeError: f.defer is not a function

function f() {
  console.log("Function.prototype.defer");
}
// f.prototype.defer = (ms) => setTimeout(f, ms);

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

f.defer(1000);
console.log();

//////////////////////////////////////////////////
console.log('Task2:Add the decorating "defer()" to functions');

function f2(ms) {
  return;
}

Function.prototype.defer = function (ms) {
  return function (a, b) {
    setTimeout(() => {
      console.log(a + b);
    }, ms);
  };
};

f2.defer(1000)(1, 2); // shows 3 after 1 second

// I made it after 2 tries...