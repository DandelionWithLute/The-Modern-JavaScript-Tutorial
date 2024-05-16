class CoffeeMachine {
  #waterLimit = 200;

  #fixWaterAmout(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmout(value);
  }
}

let coffeeMachine = new CoffeeMachine();

let appe = "apple";

// Try to uncomment below
// coffeeMachine.#fixWaterAmout(123);
// coffeeMachine.#waterLimit = 1000;

// Property '#fixWaterAmout' is not accessible outside
//  class 'CoffeeMachine' because it has a private identifier.ts(18013)



// To hide an internal interface we use either protected or private properties:

// Protected fields start with _. That’s a well-known convention, not enforced at the language level. Programmers should only access a field starting with _ from its class and classes inheriting from it.
// Private fields start with #. JavaScript makes sure we can only access those from inside the class.
// Right now, private fields are not well-supported among browsers, but can be polyfilled.