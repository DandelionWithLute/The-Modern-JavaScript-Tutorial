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
