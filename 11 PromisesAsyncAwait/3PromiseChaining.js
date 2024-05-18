class Thenable {
  constructor(num) {
    this.num = num;
  then(resolve, reject) {
    console.log(resolve);
    setTimeout(() => resolve(this.num * 2), 4000);
  }
}

new Promise((resolve) => resolve(1))
  .then((result) => {
    return new Thenable(result);
  })
  .then(console.log("Second then"));
