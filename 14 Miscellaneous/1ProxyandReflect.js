// Basic Syntax
// let proxy = new Proxy(target, handler);

let numbers = [0, 1, 3];
//let whatIfIDAssignNumbersAgainHere =
// numbers[123] will be undefined

numbers = new Proxy(numbers, {
  // numbers[123] will be 0
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0;
    }
  },
});

console.log(numbers[2]);
console.log(numbers[123]); //
// alert(numbers[123]); the same

//////////////////////////////////////////////////

let user = {
  name: "John",
  age: 30,
  _password: "***",
};

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
});
console.log();
for (let key in user) console.log(key);
console.log();
console.log(Object.keys(user));
console.log(Object.values(user));
console.log();
//////////////////////////////////////////////////

// Proxy limitations
// Proxies provide a unique way to alter or tweak the behavior
// of the existing objects at the lowest level.
//  Still, it’s not perfect. There are limitations.

// Built-in objects: Internal slots
//  Map, Set, Date, Promise and others

//////////////////////////////////////////////////

console.log("Task1:Error on reading non-existent property");
let user2 = { name: "John" };
function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      // Important:Pay attention to this span
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      } else {
        throw new ReferenceError(`Property doesn't exist: "${prop}"`);
      }
      //////////////////////////////////////////////////
    },
  });
}

user2 = wrap(user2);
console.log(user2.name);

//////////////////////////////////////////////////

console.log();
console.log("Task2:Accessing array[-1]");
let array2 = [1, 2, 3];

array2 = new Proxy(array2, {
  get(target, prop, receiver) {
    if (+prop < 0) prop = +prop + target.length;
    // Important
    return Reflect.get(target, prop, receiver);
  },
});

console.log(array2[-1]);
console.log(array2[-2]);

//////////////////////////////////////////////////

console.log();
console.log("Task3:");

let handlers = Symbol('handlers');

function makeObservable(target) {
  // 1. Initialize handlers store
  target[handlers] = [];

  // Store the handler function in array for future calls
  target.observe = function(handler) {
    this[handlers].push(handler);
  };

  // 2. Create a proxy to handle changes
  return new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(...arguments); // forward the operation to object
      if (success) { // if there were no error while setting the property
        // call all handlers
        target[handlers].forEach(handler => handler(property, value));
      }
      return success;
    }
  });
}

let user3 = {};

user3 = makeObservable(user3);

user3.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user3.name = "John";