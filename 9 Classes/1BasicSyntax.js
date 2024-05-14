class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
  sayHello() {
    console.log("I'm saying hello~");
  }
}

let user = new User("John");
user.sayHi();
console.log("User class :\n" + User);

// Class is actually function in Javascript
console.log(typeof User);
console.log();
console.log(User === User.prototype.constructor);

console.log(User.prototype.sayHi);
console.log(User.prototype.sayHi.name);

// Error: console.log(user.sayHi())
user.sayHi();
user.sayHi;
user.apple = () => console.log("apple");
user.apple();
user.apple; // Nothing happens.
console.log();
user.sayHello; // Nothing happens.
user.sayHello();

class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    console.log(this.value);
  };
}

let button = new Button("hello");

setTimeout(button.click, 1000);
