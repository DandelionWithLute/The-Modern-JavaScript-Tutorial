function sayHi() {
  console.log("Hi");
}
console.log(sayHi.name);

let sayHi2 = () => {
  console.log("Hi");
};
console.log(sayHi2.name);

let sayHi3 = function () {
  console.log("Hi3");
};
console.log(sayHi3.name);

let objWithNumIndex = {
  0: "H",
  1: "E",
  2: "L",
  3: "L",
  4: "O",
  //   Have or not the below line
  length: 5,
};
console.log(Array.from(objWithNumIndex));
