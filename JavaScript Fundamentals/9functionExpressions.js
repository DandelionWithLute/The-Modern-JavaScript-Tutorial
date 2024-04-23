sayHi("John"); // Hello, John

function sayHi(nameA) {
  console.log(`Hello, ${nameA}`);
}

sayGoodbye("Genny");
let sayGoodbye = (nameB) => console.log(`Goodbye, ${nameB}`);

// Function is avaliable before or after it's written within the same level scope