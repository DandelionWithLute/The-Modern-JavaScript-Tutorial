class Animal {
  showName() {
    console.log("animal");
  }

  constructor() {
    this.showName();
  }
}

class Rabbit extends Animal {
  showName() {
    console.log("rabbit");
  }
}

let bird = new Animal();
console.log(bird.showName);
bird.showName;
console.log();
bird.showName();
new Animal().showName;
