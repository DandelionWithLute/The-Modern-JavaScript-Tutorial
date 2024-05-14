let obj = {
  animal: "dog",
  sound: "bark",
  sex: "male",
};

console.log("Object.getPrototypeOf(obj):\n" + Object.getPrototypeOf(obj));
Object.defineProperty(obj, "animal", { writable: false });
obj.animal = "cat";
console.log();
console.log(
  `After Object.defineProperty(obj, "animal", { writable: false });\nThe animal is:` +
    obj.animal
);
console.log();
console.log("Object.getPrototypeOf(obj):\n" + Object.getPrototypeOf(obj));
console.log();

let animal = {
  eats: true,
};

let rabbit = Object.create(animal);
console.log("Object.create(obj) is the same as {__proto__:obj}");
console.log(rabbit.eats);

let desc1 = `
The Object.create method is a bit more powerful,
 as it has an optional second argument: property descriptors.`;
console.log(desc1);

// Intellisense:Creates an object that has the specified prototype,
//  and that optionally contains specified properties.
let rabbit2 = Object.create(animal, {
  jumps: {
    value: true,
  },
});
console.log(
  "I used to doubt the difference between Object.assign()and Object.create() method."
);

console.log(rabbit2.jumps);
// Don’t change [[Prototype]] on existing objects if speed matters

// "Very plain" objects
// an interesting glitch: all keys work fine except "__proto__"
// https://javascript.info/prototype-methods

let chineseDict = Object.create(null);
chineseDict.hello = "你好";
chineseDict.bye = "再见";
console.log(chineseDict);

// Object.defineProperties()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties

let summaryDesc = `
    To create an obj:
        literal:{__proto__:...}
        Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
        Easy to Memory Verision: Object.create(Prototype,OPDescriptors)
`;
console.log(summaryDesc);

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
Object.prototype.eatBanana = "eat a banana";
console.log(animal.eatBanana);

//////////////////////////////////////////////////
let dictionary = {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
};

dictionary.apple = "apple";
dictionary.__proto__ = "test";

for (let key in dictionary) {
  console.log(key);
}

// Create a new obj and start with value null
// The default property is not writable