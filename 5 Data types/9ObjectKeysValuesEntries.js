let newS = Symbol.for("symbol");
let newSwithK = Symbol.keyFor(newS);
let newLocalS = Symbol("localSymbol");
// let newLocalSwithK = Symbol.keyFor(newLocalSwithK); // undefined
console.log(newS);
console.log(newSwithK);
console.log(newLocalS);
// console.log(newLocalSwithK);

////////////////////////////////////////////////
let userObj = {
  name: "John",
  age: 30,
};
// TypeError: userObj.keys is not a function
// console.log(userObj.keys());
console.log(Object.keys(userObj));
/////////////////////////////////////////////////
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert prices to array, map each key/value pair into another pair
  // and then fromEntries gives back the object
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
);
console.log(doublePrices.meat); // 8
// console.log(Object.fromEntries(userObj));

// https://dict.youdao.com/result?word=entry&lang=en
// 5.
// [N-COUNT]An entry in a diary, account book, computer file, or reference book is a short piece of writing in it. (日记中的) 简短记录; (账簿中的) 账目; (计算机文档或参考书中的) 条目
// Violet's diary entry for April 20, 1917 records Brigit admitting to the affair.

// 维奥莉特1917年4月20日的日记简短记录着布里吉特承认此事。

let triplePriceArray = Object.entries(userObj);
console.log(triplePriceArray)