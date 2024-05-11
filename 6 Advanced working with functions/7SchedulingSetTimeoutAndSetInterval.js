// setTimeout(func,time/ms)
function sayHi() {
  console.log("Waited then hi!");
}

setTimeout(sayHi, 1000);

function sayHiPassName(phrase, who) {
  console.log(phrase + " " + who);
}
setTimeout(sayHiPassName, 2000, "Hello ", "John");

// The first arg should alway be a function.
// setTimeout("alert('Hello')", 1000);

// Not ok for nodejs
// setTimeout("console.log('Hello')", 1000);

// Task1
// Output every second
function printEverySecondsInterval(from, to) {
  let current = from;

  let timerId = setInterval(function () {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

printEverySecondsInterval(1, 5);

function printEverySecondsNestedTimeout(from, to) {
  let current = from;

  setTimeout(function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}
printEverySecondsNestedTimeout(11, 15);
// Task2
// Any setTimeout will run only after the current code has finished.
