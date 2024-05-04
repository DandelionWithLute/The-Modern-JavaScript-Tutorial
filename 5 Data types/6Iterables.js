// Symbo.iterator is too complicated, deserted.
let string = "Hello";
for (let letter of string) console.log(letter);
for (let key in string) console.log(key + string[key]);

//////////////////////////////////////////
// Calling an iterator explicitly
let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}
//////////////////////////////////////////

// Important: Array.From
let arrayLikeObj = {
  0: "Hello",
  1: "World",
  length: 2,
};

let changedObj = Array.from(arrayLikeObj)
console.log(changedObj)