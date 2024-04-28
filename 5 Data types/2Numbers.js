// I didn't know this syntactic sugar before.
let billion = 1000000000;
let syntaticBillion = 1_000_000_000;
console.log(billion);
console.log(syntaticBillion);

let bigIntBillion = 1e9;
console.log(bigIntBillion);

console.log(1e3 === 1000);
let waitingToTransform = 0x3f;
console.log(waitingToTransform);

// 16x16=256
console.log(waitingToTransform.toString(2));
console.log(waitingToTransform.toString(6));
//143=3+4*6+1*6*6=27+36=63
console.log(waitingToTransform.toString(8));
console.log(waitingToTransform.toString(16));

console.log("Math.floor\t Math.ceil\t Math.round\t Math.trunc\t");
let arr = [3.1, 3.6, -1.1, -1.6];
for (let i = 0; i < arr.length; i++) {
  console.log(
    Math.floor(arr[i]) + "\t\t\t",
    Math.ceil(arr[i]) + "\t\t\t",
    Math.round(arr[i]) + "\t\t\t",
    Math.trunc(arr[i]) + "\t\t\t"
  );
}

Math.floor();

console.log(1e500); // Infinity

console.log(0.1 + 0.2);

console.log((0.1).toFixed(20));

// "Self Increasing Number"
console.log(9999999999999999);

console.log("isNan:");
console.log(isNaN("str"));
console.log(isNaN(NaN));

console.log("NaN===NaN");
console.log(NaN === NaN);

console.log(
  "Sometimes isFinite is used to validate whether a string value is a regular number:"
);

// let num = +prompt("Enter a number", '');
// alert( isFinite(num) );

// will be true unless you enter Infinity, -Infinity or not a number

// isFinite check!