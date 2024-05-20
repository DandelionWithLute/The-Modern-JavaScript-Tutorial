// Error in setTimeout
// What do you think? Will the .catch trigger? Explain your answer.

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch(console.log);

console.log(new Error("console.log error obj"))