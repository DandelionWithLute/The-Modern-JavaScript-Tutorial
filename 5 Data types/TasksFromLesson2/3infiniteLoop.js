//
//
// An occasional infinite loop
//
//

let i = 0;
while (i != 10) {
  i += 0.2;
  // My addition
  if (i > 50) {
    // Never ends without this
    break;
  }
}
console.log(i);

// Float Points
