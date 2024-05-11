console.log("https://javascript.info/arrow-functions")
let arr = [1, 23, 4, 51, 6, 23, 14, 64, 3, 3564, 75];
for (let i in arr) {
  process.stdout.write(i.toString());
}
console.log()
for (let int of arr) {
  process.stdout.write(int.toString());
}
console.log(arr.length);
