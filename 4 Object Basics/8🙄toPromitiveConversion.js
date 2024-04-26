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
console.log(+user)