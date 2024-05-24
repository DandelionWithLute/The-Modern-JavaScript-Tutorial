let user = {
  name: "John",
  hi() {
    console.log(this.name);
  },
};

// split getting and calling the method in two lines
let hi = user.hi;
// hi(); // Error, because this is undefined
user.hi();
hi();

let f = user.hi;
f();

let userF = {
  name: "John",
  sayHi: function hi() {
    console.log(this.name);
  },
};

let uf = userF.sayHi;
uf();
userF.sayHi();

let ufwithCall = userF.sayHi();
ufwithCall;
