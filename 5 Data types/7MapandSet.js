// https://javascript.info/map-set
// Map is a collection of keyed data items, just like an Object.
// But the main difference is that Map allows keys of any type.

let map = new Map();
map.set("1", "str");
map.set(1, "num");
map.set(true, "Boolean");
console.log(map);
// console.log(map["1"])//undefined
console.log(map.get("1"));

/////////////////////////////////////////////
// map[key] isn’t the right way to use a Map
// Although map[key] also works, e.g. we can set map[key] = 2, this is treating map as a plain JavaScript object, so it implies all corresponding limitations (only string/symbol keys and so on).

// So we should use map methods: set, get and so on.
/////////////////////////////////////////////

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

console.log(recipeMap);

for (let vegetable of recipeMap.keys()) console.log(vegetable);
for (let num of recipeMap.values()) console.log(num);

process.stdout.write("Hello");
process.stdout.write(" World!");
console.log();

// To make an Object Array, you contain length.

let arrFrom = Array.from({ 0: "Hello", 1: "World", length: 2 });
arrFrom[10] = "10thStr";
console.log(arrFrom);

/////////////////////////////////////////////
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]
/////////////////////////////////////////////

let set = new Set(["orange", "apple", "banana"]);
for (let fruit of set) console.log(fruit);
set.forEach((fruit1, fruit2, set) => console.log(fruit2));

/////////////////////////////////////////////
// Unique Function With Set
// Super Super Important
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

const unique = (arr) => {
  let toReturn = new Set(arr);
  return Array.from(toReturn);
};

console.log(unique(values));
