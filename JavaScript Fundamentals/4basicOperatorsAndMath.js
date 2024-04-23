let x = 1;

x = -x;
console.log(x); // -1, unary negation was applied

let z = 1,
  y = 3;
console.log(y - z); // 2, binary minus subtracts values

// The remainder of ? devided by ?
console.log(5 % 2, 8 % 3, 8 % 4);

console.log(2 ** 5);

console.log(8 ** (1 / 3));

let s = "my" + "string";
console.log(s);

console.log("1" + 2);
console.log(2 + "1");

console.log(2 + 2 + "1"); // Important "41"

// Only minus applied
console.log(6 - "2");
console.log("6" / "3");

// Numeric conversion, unary +
console.log(+"3" + +"2");
console.log(typeof (+"3" + +"2"));
