// From Garbage Collection Chapter,
// we knew the engine keeps a value in memory
// with "reachable" and can potentially be used.
let johnToOverwrite = { name: "John" };
john = null;
// object will be removed from memory

// However Map things would not be garbage collected
let johnMapCantBeCollected = { name: "John" };
let johnMap = new Map();
// console.log(typeof johnMap)//object
johnMap.set(johnMapCantBeCollected);
johnMapCantBeCollected = null;
console.log(johnMap.keys());


// Too many details now, discarded just now...
// Weakset Weakmap... I didn't use them too much...