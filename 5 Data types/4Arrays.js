let fruits = [
  "Apple",
  "Orange",
  "Plum",
  // The last comma is called trailing comma.
];

console.log(fruits);

// let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  process.stdout.write(fruits[i] + " ");
}
console.log();
for (let fruit of fruits) {
  process.stdout.write(fruit + " ");
}
console.log();
for (let key in fruits) {
  process.stdout.write(fruits[key] + " ");
}

let veryLongIndexArr = [];
veryLongIndexArr[234] = "apple";
// process.stdout.write(veryLongIndexArr.length)
//TypeError [ERR_INVALID_ARG_TYPE]:
//  The "chunk" argument must be of type string
//  or an instance of Buffer or Uint8Array.
//  Received type number (235)

console.log(veryLongIndexArr.length);

let numArr = [1, 2, 3, 4, 5];
console.log(String(numArr));

// Array Methods: Iterate:forEach
["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);

// let sortArray = ["a", "d", "b", "c"];
// let newSortArray = sortArray.sort((a, b) => a - b);

// [1,7,2,4] = -6 5 -2
let numSortArray = [1, 2, 5, 3, 4];
// let newNumSortArray = numSortArray.sort((a, b) => a - b);//ascending
let newNumSortArray = numSortArray.sort((a, b) => b - a); //descending
//
// Important: a-b only works for numbers
//

// let newSortArray = sortArray.sort();
// let newSortArray = sortArray.sort(function(a,b){return a-b;});
// let newSortArray = sortArray.sort((a, b) => a - b);
console.log(newNumSortArray);

console.log(Array.isArray({}));
console.log(Array.isArray([{}]));
console.log(typeof {});
console.log(typeof []);
