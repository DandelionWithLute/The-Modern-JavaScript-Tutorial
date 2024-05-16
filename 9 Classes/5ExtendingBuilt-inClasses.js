class myClass {}

// class PowerArray extends myClass {}
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 4, 43, 12, 2, 5, 7, 22);
console.log(arr.__proto__);
let oarr = new Array("543asfd", "dsaj52", "lll6fedgd4et");
console.log(oarr);
console.log(oarr.length);
console.log(typeof oarr);

console.log(arr.isEmpty());

let earr = new PowerArray();
console.log(earr.isEmpty());
