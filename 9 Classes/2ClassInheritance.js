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

// Overriding a method

// Overriding a constructor

// Super:internals, [[HomeObject]]

console.log();
//////////////////////////////////////////////////
console.log("Task1:Error creating an instance");

class taskAnimal {
  constructor(name) {
    this.name = name;
  }
}

class taskRabbit extends taskAnimal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let tR = new taskRabbit("White Rabbit");

console.log(tR.name);
