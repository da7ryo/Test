/* TASK 1 – IF / ELSE
Write a function checkNumber(number) that returns:
"Positive" if number > 0
"Negative" if number < 0
"Zero" if number = 0 */

function checkNumber(a) {
  if (a > 0) {
    return `This number is postive`;
  } else if (a < 0) {
    return `This number is negative`;
  } else {
    return `The number is null`;
  }
}
console.log(checkNumber(-9));

/* TASK 2 – FOR LOOP
Write a function printNumbers() that prints numbers from 1 to 20. */

function printNumbers() {
  for (let i = 0; i < 21; i++) {
    console.log(i);
  }
}
printNumbers();

/* TASK 3 – FUNCTION
Write a function maxOfThree(a, b, c) that returns the largest of three numbers.*/

function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(maxOfThree(10, 8, 3));

/* TASK 4 – ARRAY
Given an array numbers = [5, 12, 8, 130, 44], write a function findLargest(arr) that returns the largest number. */

numbers = [5, 12, 8, 130, 44];

function findLargest(arr) {
  let largest = 0;
  for (let item of arr) {
    if (item > largest) {
      largest = item;
    }
  }
  return largest;
}

console.log(findLargest(numbers));

/* TASK 5 – OBJECT
Create an object person with properties:
firstName
lastName
age
Write a function personDescription(person) that returns a sentence like:
"Ivan Horvat is 25 years old"*/

const person = {
  firstName: 'Ivan',
  lastName: 'Horvat',
  age: 25,
};

function personDescription(obj) {
  return `${obj.firstName} ${obj.lastName} is ${obj.age} years old`;
}

console.log(personDescription(person));

/* TASK 6 – CALLBACK FUNCTION
Write a function processNumber(number, callback) that returns the result of callback(number).*/

function processNumber(a, cb) {
  return cb(a);
}

function multByFour(a) {
  return a * 4;
}

console.log(processNumber(5, multByFour));

/* TASK 7 – PROMISE
Write a function loadData() that returns a Promise which resolves "Loaded" after 1 second. */

function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Loaded');
    }, 1000);
  });
}

loadData()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

/* TASK 8 – CLASS

Create a class Car with properties:
make
model
Add a method describe() that returns:
"This is make model" */

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  describe() {
    return `This is ${this.make}, model ${this.model}`;
  }
}

const car1 = new Car('BMW', 'X5');

console.log(car1.describe());

/* TASK 9 – ARRAY PROCESSING
Write a function processArray(numbers) that:
filters even numbers
multiplies them by 3
returns the new array*/

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.filter((item) => item % 2 === 0));
console.log(arr.map((item) => item * 3));

/* TASK 10 – LOGIN FUNCTION
Write a function login(username, password) that:
if username is "admin" and password is "1234" → returns "Login successful"
otherwise → returns "Login failed"*/

function login(username, password) {
  if (username === 'admin' && password === '1234') {
    return `Login successful`;
  } else {
    return `Login failed`;
  }
}

console.log(login('admin', '1234'));
