// Function that takes a number and a callback function, then returns the result of the callback

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

// Function that takes a name and a greeting callback, then returns the greeting

function greet(name, greeting) {
  return greeting(name); // Call the greeting callback with name as argument
}

// Function that returns a greeting using "Hello"

function greetWithHello(name) {
  return `Hello, I am ${name}`; // Return a formatted greeting string
}

// Function that returns a greeting using "Hi"

function greetWithHi(name) {
  return `Hi there, my name is ${name}`;
}

console.log(greet("Dario", greetWithHello));
console.log(greet("Zoran", greetWithHi));
