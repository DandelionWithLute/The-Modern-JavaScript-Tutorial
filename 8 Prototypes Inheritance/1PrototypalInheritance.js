let animal0 = {
  eats: true,
};

let rabbit0 = {
  jumps: true,
};

rabbit0.__proto__ = animal0;
console.log(rabbit0.__proto__);
// sets rabbit0.[[Prototype]] = animal0

console.log(rabbit0.eats);

//////////////////////////////////////

// output of the next line is undefined
// animal.walk = () => console.log("Animal Walk");

let animal = {
  eats: true,
  walk() {
    console.log("Animal Walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

console.log("The order of rabbit obj and animal obj must not be reversed.");
console.log(rabbit.walk());
//////////////////////////////////////
// __proto__ is a historical getter/setter for [[Prototype]]
// __proto__ is a getter/setter for [[Prototype]].

// Object.getPrototypeOf/Object.setPrototypeOf

// Writing doesn’t use prototype

let animal2 = {
  eats: true,
  walk() {
    /* this method won't be used by rabbit */
    console.log("animal2 walk"); // got to return here actually
  },
};

let rabbit2 = {
  __proto__: animal2,
};

rabbit2.walk = function () {
  console.log("Rabbit! Bounce-bounce!");
};

rabbit2.walk(); // Rabbit! Bounce-bounce!
animal2.walk();
//////////////////////////////////////////////////
console.log();
console.log("for...in");
for (let prop in rabbit) console.log(prop);
console.log();
console.log("Object.keys()");
console.log(Object.keys(rabbit));

//////////////////////////////////////////////////

// In this section we learned __proto__

console.log("Task");
let hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

speedy.eat("apple");
console.log(speedy.stomach);
console.log(lazy.stomach);
