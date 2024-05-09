console.log("Usage of args");
// Important: I didn't know this before.
function sumAll(...args) {
  // args is the name for the array
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  console.log(args);

  return sum;
}

console.log(sumAll(1, 2, 5, 87, 2));
console.log();
///////////////////////////////////////////////////
console.log("Max comparison including arr");
let compareMaxArr1 = [3, 77, 21, 2];
let compareMaxArr2 = [66, 2, 1, 34, 77];
console.log(Math.max(2, 55, 12, ...compareMaxArr1, ...compareMaxArr2));
console.log();
///////////////////////////////////////////////////
console.log("arrToMerge & arrToCopy");
let arrToMerge = [...compareMaxArr1, ...compareMaxArr2];
console.log(arrToMerge);
console.log("This way is much shorter and easier than Object.assign({},copy)");
console.log();
///////////////////////////////////////////////////
function showMe(firstName, lastName, otherArgs) {
  console.log(firstName + " " + lastName);
  console.log(arguments);
  console.log(arguments["0"]);
  console.log(arguments[2]);
  console.log(arguments.callee);
  console.log("arguments.length: " + arguments.length);
}
showMe("John", "Doe", "sda", "yrewert", true, "y345grh", 233);
