let user = {
  name: "John",
  surname: "Smith",

  fullName() {
    return `${this.name} ${this.surname}`;
  },
};
console.log(user.fullName());

let user2 = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};
console.log(user2.fullName);

///////////////////////////////////////////////////////
// See this, it's really so powerful.

let user3 = {
  name: "Mike",
  surname: "Dane",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  //   Destructure
  // A 'set' accessor must have exactly one parameter.ts(1049)
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

user3.fullName = "Patrick Shyu";
console.log(user3.name);
console.log(user3.surname);
///////////////////////////////////////////////////////
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}

let john = new User("John", new Date(1992, 6, 1));
console.log(john)
console.log(john.age) // Very Important!
// In this section we learned __proto__