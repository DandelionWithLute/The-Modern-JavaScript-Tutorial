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