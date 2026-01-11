/* TASK 1 – VARIABLES & CONDITIONS

Create a function checkUserAge(age) that:
returns "Child" if age < 18
returns "Adult" if age is between 18 and 64
returns "Senior" if age >= 65 */

function checkUserAge(age) {
  if (age < 18) {
    return 'Child';
  } else if (age >= 18 && age < 65) {
    return 'Adult';
  } else {
    return 'Senior';
  }
}
console.log(checkUserAge(65));

/* TASK 2 – LOOP & CONDITIONS

Write a function sumEvenNumbers(limit) that:
loops from 1 to limit
sums only even numbers
returns the sum */

function sumEvenNumbers(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumEvenNumbers(20));

/* TASK 3 – FUNCTION COMPOSITION

Write a function calculate(a, b, operation) where:
operation can be "add", "subtract", "multiply", "divide"
returns the result based on the operation
returns "Invalid operation" if operation is unknown */

function calculate(a, b, operation) {
  if (
    operation === add ||
    operation === subtract ||
    operation === multiply ||
    operation === divide
  ) {
    return operation(a, b);
  } else {
    return 'Invalid operation';
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log(calculate(7, 4, divide));
console.log(calculate(4, 8, sumEvenNumbers));

/* TASK 4 – ARRAY & LOOP

Given an array:
let scores = [45, 78, 92, 60, 33, 88];
Write a function countPassed(scores) that:
counts how many values are >= 60
returns the count */

let scores = [45, 78, 92, 60, 33, 88];

function countPassed(scores) {
  let count = 0;
  for (let num of scores) {
    if (num >= 60) {
      count++;
    }
  }
  return count;
}

console.log(countPassed(scores));

/* TASK 5 – ARRAY & OBJECTS

Given:
let users = [
  { name: "Ivan", age: 25 },
  { name: "Ana", age: 17 },
  { name: "Marko", age: 32 },
  { name: "Petra", age: 15 }
];

Write a function getAdults(users) that:
returns a new array with only users who are 18 or older */

let users = [
  { name: 'Ivan', age: 25 },
  { name: 'Ana', age: 17 },
  { name: 'Marko', age: 32 },
  { name: 'Petra', age: 15 },
];

function getAdults(users) {
  let newArr = [];
  for (let i = 0; i < users.length; i++) {
    let currentUser = users[i];
    if (currentUser.age >= 18) {
      newArr.push(currentUser);
    }
  }
  return newArr;
}

console.log(getAdults(users));

/* TASK 6 – CALLBACK FUNCTION

Write a function processValue(value, callback) that:
applies the callback to value
returns the result
Create at least two different callbacks (e.g. double, square). */

function processValue(value, callback) {
  return callback(value);
}

function double(a) {
  return 2 * a;
}

function square(a) {
  return a * a;
}
console.log(processValue(7, double));
console.log(processValue(4, square));

/* TASK 7 – PROMISE & CONDITION

Write a function checkServer(status) that:
returns a Promise
resolves "Server is running" if status is true
rejects "Server is down" if status is false */

function checkServer(status) {
  return new Promise((resolve, reject) => {
    if (status) {
      resolve('Server is running');
    } else {
      reject('Server is down');
    }
  });
}

checkServer('day')
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

/* TASK 8 – ASYNC SIMULATION

Write a function fetchUser() that:
returns a Promise
after 1.5 seconds resolves an object:
{ username: "admin", role: "administrator" } */

const person = { username: 'admin', role: 'administrator' };

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(person);
    }, 1500);
  });
}

fetchUser()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

/* TASK 9 – CLASS & METHODS

Create a class BankAccount with:
properties: owner, balance
method deposit(amount)
method withdraw(amount)
if balance is insufficient, return "Insufficient funds"
method getBalance() */

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance < amount) {
      return 'Insufficient funds';
    } else {
      this.balance -= amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}

const ivanFranjic = new BankAccount('Ivan Franjic', 7500);
console.log(ivanFranjic);
ivanFranjic.deposit(750);
console.log(ivanFranjic.getBalance());
ivanFranjic.withdraw(5000);
console.log(ivanFranjic.getBalance());

/* TASK 10 – COMBINATION TASK (REAL-LIFE LOGIC)

Write a function loginSystem(username, password, users1) where:
users is an array of objects:
[{ username: "admin", password: "1234" }]

if user exists and password matches → return "Login successful"
otherwise → return "Login failed" */

let users1 = [
  { username: 'admin', password: '1234' },
  { username: 'Dario', password: '1478' },
  { username: 'Lana', password: '5412' },
];

function loginSystem(username, password, users) {
  for (let user of users) {
    if (user.username === username && user.password === password) {
      return 'Login successful';
    }
  }
  return 'Login failed';
}
console.log(loginSystem('Miroslav', '4587', users1));
console.log(loginSystem('admin', '1234', users1));
console.log(loginSystem('Dario', '1478', users1));
