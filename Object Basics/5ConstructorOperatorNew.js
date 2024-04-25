// The regular {...} syntax allows us to create one object.
// But often we need to create many similar objects, like multiple users or menu items and so on.

// const User = (name) => {
//   this.name = name;
//   this.isAdmin = false;
// };

function User(name) {
  (this.name = name), (this.isAdmin = false);
}

// You must write function but not es6 to make a constructor.

let user = new User("John");

console.log(user);

// As you can see, this is not Constructor and will not work.
function MakeSureNewFunction(name) {
  name;
  isAdmin: false;
}

// Advanced stuff(Rarely used and No need to learn)
// Comma and semicolon are all ok.
function MakeSureNew(name) {
  if (!new.target) return new MakeSureNew(name);
  this.name = name;
  this.isAdmin = false;
}

let MakeSureNewUser = MakeSureNew("Dane");
console.log(MakeSureNewUser);
