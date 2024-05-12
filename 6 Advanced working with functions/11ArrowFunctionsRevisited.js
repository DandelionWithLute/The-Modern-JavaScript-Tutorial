// Arrow functions have no “this”

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
    //   Important for next 3 lines
    this.students.forEach((student) =>
      console.log(this.title + ": " + student)
    );
    this.students.forEach(function (student) {
      // Error: Cannot read property 'title' of undefined
      console.log(this.title + ": " + student);
    });
  },
};

group.showList();
//
// Here in forEach, the arrow function is used,
// so this.title in it is exactly the same as in the outer method showList.
// That is: group.title.
//

// Arrow functions can’t run with new
// Not having this naturally means another limitation:
// arrow functions can’t be used as constructors.
//  They can’t be called with new.

function defer(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(who) {
  console.log("Hello, " + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds

// Summary
// Arrow functions:
//  Do not have this
//  Do not have arguments
//  Can’t be called with new
//  They also don’t have super,
// but we didn’t study it yet.
// We will on the chapter Class inheritance
// That’s because they are meant for short pieces of code
//  that do not have their own “context”,
// but rather work in the current one.
// And they really shine in that use case.
