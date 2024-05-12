console.log("Losing “this”");
let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hi~ ${this.firstName}`);
  },
};

let f = user.sayHi;

setTimeout(f, 1000);
setTimeout(user.sayHi, 1500);

console.log("Solution 1: a wrapper");
setTimeout(() => user.sayHi(), 2000);

console.log("Solution 2: bind");
function func(phrase) {
  console.log(phrase + ", " + this.firstName);
}

let sayHi = user.sayHi.bind(user);

sayHi();
setTimeout(sayHi,3000)

console.log("User.sayHi")
console.log(user.sayHi)