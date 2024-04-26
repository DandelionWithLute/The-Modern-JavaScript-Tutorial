// Symbol type
// By specification, only two primitive types may serve as object property keys:

// string type, or
// symbol type.
// Otherwise, if one uses another type, such as number, it’s autoconverted to string. So that obj[1] is the same as obj["1"], and obj[true] is the same as obj["true"].

// Until now we’ve been using only strings.

// Now let’s explore symbols, see what they can do for us.
let id = Symbol();
console.log(id);

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2);

// let id3 = WeirdConstructor("id")
// console.log(id3)
// ReferenceError: WeirdConstructor is not defined

console.log(id1.toString());

let user = {
  name: "John",
};
id = Symbol("id");
user[id] = 1;
// It's called Object so you can't use dot method.
console.log(user[id]);

// Global Symbols

// read from the global registry
//if the symbol did not exist, it is created
let sid = Symbol.for("id");
let sidAgain = Symbol.for("id");
console.log(sid);

console.log(sid === sidAgain);
console.log();
console.log("Here comes the reverse method keyFor():");

console.log(Symbol.keyFor(sid));
console.log(Symbol.keyFor(sidAgain));
console.log(
  "compare sid and sidAgain:" + Symbol.keyFor(sid) == Symbol.keyFor(sidAgain)
);
// Symbols inside the registry are called global symbols.
// If we want an application-wide symbol,
// accessible everywhere in the code – that’s what they are for.

// That sounds like Ruby
// In some programming languages, like Ruby, there’s a single symbol per name.
// In JavaScript, as we can see, that’s true for global symbols.

// My word: Written Once, Apply Anywhere.

let globalSymbol = Symbol.for("globalName")
let localSymbol = Symbol("localName")

console.log(Symbol.keyFor(globalSymbol))
console.log(Symbol.keyFor(localSymbol))
console.log(localSymbol.description)
