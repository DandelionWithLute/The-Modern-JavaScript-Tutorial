console.log({ key: "value" } == { key: "value" });

console.log([] == []);
console.log([] == "");
console.log([] === []);
console.log([] === "");
// This condition will always return 'false'
// since JavaScript compares objects by reference,
//  not value.ts(2839)

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");

// jz bl R-n-R
// jz Classics R-n-R
// Classics R-n-R
// R R Classics R-n-R

let arr = ["a", "b"];

// arr.push(function () {
//   console.log(this);
// });

// console.log(arr[2]()); // a,b,function(){...}

// console.log("arr push arr");
// console.log(arr.push(arr.this));
console.log("Object assign");
let newArr = Object.assign([], arr);
newArr.push(arr)
console.log(newArr);


// structuredClone()
