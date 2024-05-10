// Important:
// window in browser
// global in nodejs

// true
// console.log(alert("Hello") == window.alert("Hello"));

//
// Important
//
var gVar = 5;
let gLet = 5;
console.log(global.gVar);
console.log(global.gLet);
// console.log(window.gVar);
// console.log(window.gLet);


// if (!window.Promise) {
//     console.log("Your browser is really old!");
// }