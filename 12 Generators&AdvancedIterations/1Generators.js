// Be aware of the names here, you may need to remember them.
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// "generator function" creates "generator object"
let generator = generateSequence();
console.log(generator);
console.log(typeof generator);

let one = generator.next();

console.log(JSON.stringify(one), JSON.stringify(one), JSON.stringify(one));
console.log(JSON.stringify(one));

console.log();

let two = generator.next();
let three = generator.next();
console.log(two, three);

//////////////////////////////////////////////////

console.log();
function* generateSequenceRe() {
  yield 1;
  yield 2;
  yield 3;
}

let generatorRe = generateSequenceRe();

for (let value of generatorRe) {
  console.log(value);
}

let sequence = [0, ...generatorRe]; // [0]
sequence = [0, ...generateSequenceRe()]; // Not variable here.
console.log(sequence);

//////////////////////////////////////////////////
// use yield in generator

function* compositionSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

//////////////////////////////////////////////////
let a = 4747561509943 % 2147483647;
console.log(a);

function* pseudoRandom(seed) {
  let value = seed;

  while (true) {
    value *= 16807 % 2147483647;
    yield value;
  }
}

let prGenerator = pseudoRandom(1);
console.log()
console.log(prGenerator)
console.log(prGenerator.next())
console.log(prGenerator.next().value);
console.log(prGenerator.next().value);
