/* Napiši funkciju checkAge(age):
ako je age < 18 → "Minor"
ako je ≥ 18 → "Adult"
ako nije broj → "Invalid" */

function checkAge(age) {
  if (age < 18 && typeof age === 'number') {
    return 'Minor';
  } else if (age >= 18 && typeof age === 'number') {
    return 'Adult';
  } else {
    return 'Invalid';
  }
}

/* ZADATAK 4 — PETLJE

Napiši funkciju sumEven(numbers) koja:
prima niz brojeva
vraća zbroj parnih brojeva
ako argument nije niz → vraća 0    */

function sumEven(numbers) {
  if (!Array.isArray(numbers)) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

console.log(sumEven([1, 2, 3, 4, 5]));

/* 
a) Vrati niz imena punoljetnih korisnika
b) Izračunaj ukupnu starost svih korisnika   */

const users = [
  { name: 'Ana', age: 17 },
  { name: 'Marko', age: 25 },
  { name: 'Ivana', age: 32 },
];

console.log(users.filter((item) => item.age >= 18).map((item) => item.name));
console.log(users.reduce((acc, x) => acc + x.age, 0));

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const p1 = new Person('Slavko');
const p2 = new Person('Mira');

p1.sayHello();
p2.sayHello();

/* Napravi klasu Counter:
property: value (početno 0)
metoda: inc() → povećava value za 1
metoda: getValue() → vraća trenutnu vrijednost value   */

class Counter {
  constructor() {
    this.value = 0;
  }
  inc() {
    this.value++;
  }

  getValue() {
    return this.value;
  }
}

const c = new Counter();
c.inc();
c.inc();
console.log(c.getValue());

/* Napiši funkciju wait(ms) koja:
prima broj ms (milisekunde)
vraća Promise koji se resolve-a nakon ms milisekundi
nakon resolve-a ispisuje "Done"   */

function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done'), ms);
  });
}

wait(1000)
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

function multiply(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b;
  } else {
    return 'Invalid input';
  }
}

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  console.log(`I am ${this.type}`);
};

const dog = new Animal('Dog');
dog.speak();

/* Napravi klasu BankAccount:
property balance (početno 0)
metoda deposit(amount) → povećava balance
metoda getBalance() → vraća balance   */

class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += this.amount;
  }

  getBalance() {
    return this.balance;
  }
}

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done'), ms);
  });
}
