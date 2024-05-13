// See, this is the Initiallization
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

// Be aware of condition 1
Rabbit.prototype = {};
console.log(rabbit.eats);

// Be aware of condition 2
Rabbit.prototype.eats = false;
console.log(rabbit.eats);

// This part actually shows undefined in nodejs
////////////////////////////////////
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;
//////////////////////////////////////////////////

// Be aware of condition 3
delete rabbit.eats;
console.log(rabbit.eats);

// Be aware of condition 4
// delete rabbit.prototype.eats;
// console.log(rabbit.eats.toString());
// TypeError: Cannot convert undefined or null to object

//////////////////////////////////////////////////
function User(name) {
  this.name = name;
}

// This is the condition, try to comment it or not.
// User.prototype = {};

let user = new User("John");
let user2 = new user.constructor("Pete");
console.log(user2.name);


//        Prototype    _________________________\\
//                                     
//                     //_________________________    Constructor