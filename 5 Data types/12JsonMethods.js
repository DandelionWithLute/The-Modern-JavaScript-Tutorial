let user = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "javascript"],
  spouse: null,
};

let json = JSON.stringify(user);
console.log(json);
console.log(typeof json);

// JSON is data-only language-independent specification,
// so some JavaScript-specific object properties are skipped by JSON.stringify.

// Nested Objects are supported and converted automatically.
// Symbolic keys and values / Functions /Properties that store undefined

let userIgnored = {
  sayHi() {
    // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined, // ignored
};

console.log(JSON.stringify(userIgnored)); // {} (empty object)
