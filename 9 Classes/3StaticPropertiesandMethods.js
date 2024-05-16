// StaticMethod is the same as assigning it as a property directly
// UserSM.staticMethod = function(...){...}
class UserSM {
  static staticMethod() {
    console.log(this === UserSM);
  }
}

UserSM.staticMethod();

console.log();

//////////////////////////////////////////////////

console.log("Task:Class extends Object?");

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

console.log(rabbit.hasOwnProperty("name"));
console.log(rabbit);

//////////////////////////////////////////////////

let us = new UserSM();
console.log(us);
console.log(UserSM.__proto__);
console.log(UserSM.__proto__ === Function.prototype);

class RabbitSub extends Rabbit {
  constructor(name) {
    super(name);
  }
}

console.log(RabbitSub.__proto__ === Object); // You may ignore this chaos part

class Bird {}
class BridSub extends Bird {}
console.log(BridSub.__proto__);
console.log(typeof BridSub);
console.log(typeof BridSub.__proto__);
console.log(BridSub.__proto__ === Object);
console.log(BridSub.__proto__ === Function.prototype); // Weird... I abandoned this...
