// https://javascript.info/object-toprimitive
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    // If you directly pass the object, this Symbol Function would not return.
    // alert(`hint: ${hint}`);
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};

console.log(user);
console.log(+user);
console.log(user + 400);

let userExampleObject = {
  name: "Kevin",
};

console.log(userExampleObject.toString());
// Error
// console.log(valueOf(userExampleObject));
console.log(userExampleObject.valueOf());
