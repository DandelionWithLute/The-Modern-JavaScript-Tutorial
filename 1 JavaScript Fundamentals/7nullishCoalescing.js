let a = 5;
let b;
// console.log(a ?? b);
console.log(console.log(a) ?? console.log(1));
console.log("has the same process like this:");

// 
// The code within will run at first
// 
console.log(
  a != null && a != undefined ? console.log(`a=${a}`) : console.log(`b={b}`)
);

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// set height=100, if height is null or undefined
height = height ?? 100;