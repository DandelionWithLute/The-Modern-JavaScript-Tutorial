// Backticks can span over multiple lines
let guestList = `
Guests:
* John
* Pete
* Mary
`;

// The output is also across multiple lines.
console.log(guestList);

// \b, \f, \v	Backspace, Form Feed,
//  Vertical Tab – mentioned for completeness,
//   coming from old times,
//  not used nowadays (you can forget them right now).
a = "123\babc\f123\v";
console.log(a);
console.log(guestList[-1]);

b = "ThisIsAString";
console.log(b[0]);

// Strings can’t be changed in JavaScript.
//  It is impossible to change a character.
let str = "Hi";
console.log("I'm trying to replace the string now.");
try {
  // It's said there's error, nothing happens.
  str[0] = "h";
  console.log(str);
} catch (err) {
  console.log(err);
}
console.log("End of trying.");

//
// Remember the below stuffs are Important!
//

console.log(b[-1]); // Undefined!
console.log(b[b.length - 1]);
console.log(b.at(-1));

console.log(b.indexOf("St"));

//
// Start searching at the index of 2.
//
console.log(b.indexOf("St", 2));

console.log("Widget with id".includes("Wd"));
"".startsWith("")
"".endsWith("")

// Wow, if = "A" added, code prettier module won't work
// "Apple".slice(0,1) = "A";