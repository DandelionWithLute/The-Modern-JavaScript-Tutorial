console.log("Task One:");
console.log("Destructuring assignment");
let user = {
  name: "Mike",
  years: 40,
  gender: "Male",
  height: "175cm",
  weight: "70kg",
};
// years property into the variable age.
let { name, years: age, gender, height, weight } = user;
console.log(name, age, gender, height, weight);
console.log();

/////////////////////////////////////////////////

console.log("Task Two:");
console.log("The maximal salary");

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }
  return maxName;
}

console.log(`${topSalary(salaries)} has the most salary!`);
