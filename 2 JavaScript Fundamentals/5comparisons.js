console.log("2" > 1); // true, string '2' becomes a number 2
console.log("01" == 1); // true, string '01' becomes a number 1

// A strict equality operator === checks the equality without type conversion.
console.log(0 == false);
console.log("" == false);
console.log(0 == "");
console.log(0 == null);
console.log("" == null);

console.log("null vs undefined and reverse");
console.log(null == undefined);
console.log(undefined == null);
console.log(null === undefined);
console.log(undefined === null);

// 5 > 4 → true                          Obviously, true.
// "apple" > "pineapple" → false         Dictionary comparison, hence false. "a" is smaller than "p".
// "2" > "12" → true                     Again, dictionary comparison, first char "2" is greater than the first char "1".
// undefined == null → true              Values null and undefined equal each other only.
// undefined === null → false            Strict equality is strict. Different types from both sides lead to false.
// null == "\n0\n" → false               Similar to (4), null only equals undefined.
// null === +"\n0\n" → false             Strict equality of different types.

// What's the result of OR?
// importance: 5
// What is the code below going to output?
console.log(null || 2 || undefined);

// The answer is 2, that’s the first truthy value.


// nullish coalescing operator