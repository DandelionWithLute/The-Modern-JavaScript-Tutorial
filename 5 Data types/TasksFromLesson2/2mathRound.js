// According to the documentation Math.round
//  and toFixed both round to the nearest number:
//   0..4 lead down while 5..9 lead up.

console.log((1.35).toFixed(1));
console.log((6.35).toFixed(1));
console.log((1.35).toFixed(1)); // 1.4
console.log((6.35).toFixed(1),"wrong"); // 6.3
console.log("Correct Answers:");
console.log(Math.round(1.35 * 10) / 10);
console.log(Math.round(6.35 * 10) / 10);
// Math.round() kills the decimal
console.log(Math.round(1.456));
