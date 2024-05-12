let user = {
  name: "John",
};
let descriptor = Object.getOwnPropertyDescriptor(user, "name");
let descriptorErr = Object.getOwnPropertyDescriptor(user, "sa");
console.log(descriptor);
console.log(descriptorErr);

let pi = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(pi);

// And here we make user.name a “forever sealed” constant,
//  just like the built-in Math.PI:

Object.defineProperty(user, "name", {
  writable: false,
  configurable: false, // For e.g. you want to delete it.
});

user.name = "Pete";
delete user.name;
console.log(user.name);
// Object.defineProperty(user, "name", { value: "Pete" }); // Error

/////////////////////////////////////////////////////////////////////

// If we don’t like it, then we can set enumerable:false.
//  Then it won’t appear in a for..in loop, just like the built-in one:

let user2 = {
  name: "Jane",
  toString() {
    return this.name;
  },
};

// Define multiple properties
Object.defineProperties(user, {
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
    // ...
  });