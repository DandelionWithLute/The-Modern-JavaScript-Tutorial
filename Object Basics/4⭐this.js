const sayHi = () => {
  console.log("Hi~");
};

sayHi();
console.log(typeof sayHi);
console.log(typeof sayHi());

// Important:How to make functions as methods?
// first, declare
//

let user = { name: "John", age: "20" };
//Why you can't add () here to make it a function?
user.sayHi = sayHi; //undefined
// Because sayHi() was not defined yet.

console.log("This hi was from user");
user.sayHi();

const makeUser = () => {
  return {
    name: "Jane",
    // Yes, you can write functions inside of objects.
    ref() {
      return this;
    },
    // ref:this
  };
};

let alreadyMadeUser = makeUser();

console.log(makeUser().ref().ref().name);

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

// My Experience: In real world development situations, there may be errors in your code when using two dots and more.
