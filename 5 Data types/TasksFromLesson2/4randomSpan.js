//
//
// A random number from min to max
//
//
let a = 1;
let b = 5;

function getSpecificRandomInt(a, b) {
  let min = 0;
  let max = 0;
  if (a < b) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }

  let correctSpan = Math.random() * (max - min);
  //   let correctSpan = Math.random() * (max - min + 1);
  let ans = min + correctSpan - 0.5;
  console.log(Math.round(ans));
  return Math.round(ans);
}

let arr = [];
for (let i = 0; i < 100000; i++) {
  //   let max = 5;
  //   let min = 1;
  //   console.log((Math.random(1, 5) * 10).toFixed(1));
  //   let rand1to10 = Math.random() * 10;
  let si = getSpecificRandomInt(1, 5);

  arr.push(si);
}
arr.sort((a, b) => a - b);
console.log(arr);

let times = 1;
let timesArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == arr[i + 1]) {
    times++;
  } else {
    timesArr.push(times);
    times = 1;
  }
}
console.log(timesArr);

//stupid

// let timesCountArr = [];
// timesCountArr.pop();
// while (arr) {
//   let lastOne = arr.pop();
//   //   let newLastOne = arr.pop!= none ? continue : arr.pop() ;
//   let newLastOne = arr.pop();
//   let timesToCount = 1;
//   //   if (lastOne == newLastOne){
//   //     timesToCount+=1;}else(1){console.log(1)}}
//   if (lastOne == newLastOne) {
//     timesToCount++;
//   } else {
//     timesCountArr.push(timesToCount);
//     timesToCount = 1;
//     arr.push(newLastOne);
//   }
// }

// console.log(timesCountArr);
