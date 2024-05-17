// Very Important
// In JavaScript we can only inherit from a single object. There can be only one [[Prototype]] for an object.
//  And a class may extend only one other class.

// Also Important: You should assign object as properties to class

let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// The key action is here
Object.assign(User.prototype, sayHiMixin);
// TypeError: janeWithMixin is not a function

// let janeObj = new janeWithMixin("jane");
// TypeError: janeWithMixin is not a constructor

// Totally wrong
// let janeObj = janeWithMixin();
// console.log(janeObj().name);
// console.log(janeObj().sayBye());

let jane = new User("jane")
console.log(jane)
// Very very important bellow ! An object initializes with class !
console.log(typeof jane)
jane.sayHi()
jane.sayBye()

// Summary
// Mixin – is a generic object-oriented programming term:
//  a class that contains methods for other classes.

// Some other languages allow multiple inheritance. JavaScript does not support multiple inheritance,
//  but mixins can be implemented by copying methods into prototype.