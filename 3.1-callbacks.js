function processNumber(num, cb) {
  return cb(num);
}

function squareNum(num) {
  return num * num;
}

function multByTen(num) {
  return num * 10;
}

console.log(processNumber(44, squareNum));
console.log(processNumber(12, multByTen));

function greet(name, greeting) {
  return greeting(name);
}

function greetWithHello(name) {
  return `Hello, I am ${name}`;
}

function greetWithHi(name) {
  return `Hi there, my name is ${name}`;
}

console.log(greet("Dario", greetWithHello));
console.log(greet("Zoran", greetWithHi));
