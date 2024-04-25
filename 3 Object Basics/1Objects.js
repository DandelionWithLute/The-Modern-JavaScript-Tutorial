let user = {
  name: "John",
  age: 30,
};

console.log(user.age);

user["like birds"] = true;
console.log(user["like birds"]);

delete user.age && user["like birds"];
//
// user["like birds"] was not deleted! You must say delete to delete.
//

console.log(user);

// Yes, you can return object!
let makeName = "Jane";
let makeAge = "20";
const makeObj = (name, age) => {
  return {
    name,
    age,
  };
};

const herName = makeObj(makeName, makeAge);
console.log(herName);
//
// Property existence test, "in" operator.
//
console.log(makeName in herName);
console.log("name" in herName);

console.log("For value in herName");
for (key in herName) {
  console.log(key);
}

console.log("For value in herName");

// Wrong Edition One
// for (value in herName) {
//   console.log(key);
// }

// Wrong Edition Two
// for (key in herName) {
//   console.log(key.age);
// }

// Finally the Correct One
for (key in herName) {
  // console.log Object["value"] Wrong Edition Three
  // console.log(herName[age])
  console.log(herName[key]);
}

//
// Only integer keys are sorted and have orders in the Object.
//
let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // .., For integers in key position, have or not, "" format is not important and ignored.
  1: "USA",
};
