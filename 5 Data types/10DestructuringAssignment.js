let arr = ["John", "Smith"];
let [firstName, surname] = arr;

// In Western culture,
//  nearly all individuals possess at least one given name
//  (also known as a first name, forename, or Christian name),
//  together with a surname (also known as a last name or family name).
//  In the name "James Smith", for example, James is the first name and Smith is the surname.

console.log(firstName, surname);

// Ignore elements using commas
let [first, , third, , , sixth] = [1, 2, 3, 4, 5, 6];
console.log(third, sixth);

let userObj = {
  name: "Jane",
  age: 20,
  gender: "female",
  hobby: "hiking",
};

for (let [key, value] of Object.entries(userObj)) {
  console.log(`${key} : ${value}`);
}

///////////////////////////
// classic

let optionsPrev = {
  title: "Menu",
  width: 100,
  height: 200,
};

let { titlePrev, widthPrev, heightPrev } = optionsPrev;

// ignored some detailed stuffs

////////////////////////////////////////////////////////////////////////////////////
// Nested destructuring
// Very Important
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// destructuring assignment split in multiple lines for clarity
let {
  size: {
    // put size here
    width,
    height:tall,
  },
  items: [item1, item2], // assign items here
  title = "Menu", // not present in the object (default value is used)
} = options;

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
console.log(item1); // Cake
console.log(item2); // Donut
