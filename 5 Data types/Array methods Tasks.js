// https://javascript.info/array-methods#tasks
console.log("TASK1");
console.log("Translate border-left-width to borderLeftWidth:");
let notYetCamelizedStr = "border-left-width";
let itsSaidToBeArr = notYetCamelizedStr.split("-");
console.log(itsSaidToBeArr);
let res = itsSaidToBeArr
  .map((word, index) =>
    index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  )
  .join("");
console.log(res);
console.log();
console.log("TASK2");
console.log('Filter range "in place":');
let arrToFilter = [5, 3, 8, 1];
function filterRangeInPlace(arr, before, after) {
  return console.log(arr.filter((item) => before <= item && item <= after));
}

// Important:
// This code will not work when you use it on backend.
// Since the function was not initialized.
// let filteredArr = filterRangeInPlace(arrToFilter, 1, 4);
filterRangeInPlace(arrToFilter, 1, 4);

// console.log(filterRangeInPlace);
// process.stdout.write(filterRangeInPlace)
console.log();
console.log("TASK3");
console.log("Sort in decreasing order:");
let arrWillBeDecreasing = [5, 2, 1, -10, 8];
arrWillBeDecreasing.sort((a, b) => b - a);
console.log(arrWillBeDecreasing);

// Important:
console.log("TASK4");
console.log("Copy and sort array:");

let arrToCopy = ["HTML", "CSS", "JAVASCRIPT"];
let sliceCopy = arrToCopy.slice();
let objectCopy = Object.assign([], arrToCopy);
let structuredCopy = structuredClone(arrToCopy);
console.log(`sliceCopy:${sliceCopy}`);
console.log(`objectCopy:${objectCopy}`);
console.log(`structuredCopy:${structuredCopy}`);
console.log(`typeof sliceCopy:${typeof sliceCopy}`);
console.log(`typeof objectCopy:${typeof objectCopy}`);
console.log(`typeof structuredCopy:${typeof structuredCopy}`);

// console.log(`${arrToCopy}`);

console.log("TASK5");
console.log("Create an extendable calculator");
console.log();
console.log("TASK5");
console.log("Sort users by age");
console.log();
console.log("TASK6");
console.log("Shuffle an array");
console.log();
// 
// 
// Very Very Important: 
// 
// 

console.log("TASK7");
console.log("Get average age:");
// users.reduce();
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

console.log(getAverageAge(arr)); // 28

console.log()
console.log("Other Stuffs")
if(0){
  console.log("0")
}
if(1){
  console.log("1")
}