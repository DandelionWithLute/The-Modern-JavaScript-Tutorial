let now = new Date();
console.log(now);
let JanFirst1970 = new Date(0);
console.log(JanFirst1970);

let date1 = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(date1); // 1.01.2011, 02:03:04.567

let date2 = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(date2); // 1.01.2011, 02:03:04.567

let date3 = new Date(2022, 2, 3, 4, 5, 6, 789);
console.log(date3);

// Change to milliseconds
console.log(+now);

////////////////////////////////////
let arr = [];
let start = Date.now();
console.log(start);
for (let i = 0; i < 10000; i++) {
  arr.push(i);
}
let end = Date.now();
console.log(end);
console.log(`${end - start} of time has passed.`);

// console.log(Date.UTC())

/////////////////////////
//new Date(year, month, date, hour, minute, second, millisecond)
let d1 = new Date(2012, 0, 20, 3, 12);
console.log(d1);

//new Date(datastring)
let d2 = new Date("2012-02-20T03:12");
console.log(d2);

// console.log(date.getDay())

console.log(new Date(2024, 3, 5));
let aSingleDay = new Date(2024, 3, 7)
// let aSingleDay = new Date(2024, 3, 1)
console.log(aSingleDay.getDay())

// Last day of month?
// How many seconds have passed today?
// How many seconds till tomorrow?
// Format the relative date