let user = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "javascript"],
  spouse: null,
};

let json = JSON.stringify(user);
console.log(json);
console.log(typeof json);

// JSON is data-only language-independent specification,
// so some JavaScript-specific object properties are skipped by JSON.stringify.

// Nested Objects are supported and converted automatically.
// Symbolic keys and values / Functions /Properties that store undefined

let userIgnored = {
  sayHi() {
    // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined, // ignored
};

console.log(JSON.stringify(userIgnored)); // {} (empty object)

console.log("Excluding and transforming: replacer");

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup references room
};

// room.occupdBy = meetup; // This code is meaningless except for explanation.

console.log(JSON.stringify(meetup, ["title", "participants"]));
console.log(
  JSON.stringify(meetup, ["title", "participants", "place", "name", "number"])
);

//////////////////////////////////////////////
console.log("Formatting: space");
console.log(JSON.stringify(user, null, 2));
//////////////////////////////////////////////
// JSON.parse() can deserialize
console.log("Task 1:");
console.log("Turn the object into JSON and back")
let numbers = "[0,1,2,3]";
console.log(JSON.parse(numbers));
console.log(typeof JSON.parse(numbers)); // Important

let userData =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user1 = JSON.parse(userData);
console.log(user1.friends[1]); // 1

//////////////////////////////////////////////
console.log("Task 2:");
console.log("Exclude backreferences")

let room2 = {
  number: 23
};

let meetup2 = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room2
};

room2.occupiedBy = meetup2;
meetup2.self = meetup2;

console.log( JSON.stringify(meetup2, function replacer(key, value) {
  return (key != "" && value == meetup2) ? undefined : value;
}));

/*
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/


// "Write replacer function to stringify everything, but remove properties that reference meetup:"
// I understood it, but did not write it by myself.