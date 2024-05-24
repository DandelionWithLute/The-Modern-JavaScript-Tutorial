let result = eval("console.log('This result was from eval buit-in function.')");
// console.log(result);
result;

// If eval’ed code doesn’t use outer variables, please call eval as window.eval(...):
//
// From browser environment
//
// let x = 1;
// {
//   let x = 5;
//   window.eval("alert(x)"); // 1 (global variable)
// }


// Without use strict, eval doesn’t have its own lexical environment, so we would see x and f outside.
// 
// reminder: 'use strict' is enabled in runnable examples by default
// 
// eval("let x = 5; function f() {}");
// 
// alert(typeof x); // undefined (no such variable)
// function f is also not visible


console.log("Summary")
console.log(`
Rarely used in modern JavaScript, as there’s usually no need.
Can access outer local variables. That’s considered bad practice.
Instead, to eval the code in the global scope, use window.eval(code).
Or, if your code needs some data from the outer scope, use new Function and pass it as arguments.

Task1
Create a calculator that prompts for an arithmetic expression and returns its result.

let expr = prompt("Type an arithmetic expression?", '2*3+2');

alert( eval(expr) );
`)