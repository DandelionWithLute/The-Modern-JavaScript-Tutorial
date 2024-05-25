console.log("\x7A");
console.log("\xA9" + "The copyright symbol");

// Takeaway: splitting strings at an arbitrary point is dangerous
console.log("hi 😂".slice(0, 4)); //  hi [?]

// two characters may visually look the same,
// but be represented with different Unicode compositions.
//
let s1 = "S\u0307\u0323"; // Ṩ, S + dot above + dot below
let s2 = "S\u0323\u0307"; // Ṩ, S + dot below + dot above
//
console.log(`s1: ${s1}, s2: ${s2}`);
//
console.log(s1 == s2); // false though the characters look identical (?!)
