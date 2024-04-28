let john = {
  name: "John",
  sayHi: function () {
    console.log("Hi buddy.");
  },
};

john.sayHi();

let n = 1.23456;
let x = 4;
// 总共精确两位
console.log(n.toPrecision(2));
// 精确到小数点后两位
console.log(n.toFixed(2));

// What the hell?
// console.log(x.toExponential(2))

console.log(typeof 0);
console.log(typeof "0");
console.log(typeof new Number("0"));
let a = new Number("123");
console.log(a);
console.log(a["Number"]);

//
// Brain Storming: zero variable here becomes an object.
//

let zero = new Number(0);
if (zero) {
  console.log("zero is truthy?");
}

//
// null/undefined have no methods, error returned
//
// console.log(null.test)

//Another Brain Storming:Adding properties to string
let str = "Hello";
// let str.next =""
str.next = " World!";
console.log(str + str.next);

// This example clearly shows that primitives are not objects.
// They can’t store additional data.
