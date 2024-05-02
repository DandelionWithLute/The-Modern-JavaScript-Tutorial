// https://javascript.info/array-methods#tasks
console.log("TASK1");
console.log("Translate border-left-width to borderLeftWidth:");
let notYetCamelizedStr = "border-left-width";
let itsSaidToBeArr = notYetCamelizedStr.split("-");
console.log(itsSaidToBeArr);
let res = itsSaidToBeArr.map((word, index) =>
  index == 0 ? word : word[0].toUpperCase() + word.slice(1)
).join("");
console.log(res)