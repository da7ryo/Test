/* 5.1 Write an object car that has:
brand
model
year
a method age() that returns the car's age (2025 - year) */

const car = {
  brand: "Mercedes",
  model: "w204",
  year: 2011,
  age: function () {
    return 2025 - this.year;
  },
};

// 5.2 Write a function getValues(obj) that returns all the values from an object as an array.

function getValues(obj) {
  const valuesOf = [];
  for (let key in obj) {
    valuesOf.push(obj[key]);
  }
  return valuesOf;
}

console.log(getValues(car));

/* 5.3 Write an array of objects users, where each object has:
name
age
email
Print all email addresses using a loop. */

const users = [
  {
    name: "Dario",
    age: 33,
    email: "dario@gmail.com",
  },
  {
    name: "Sasa",
    age: 25,
    email: "sasa@gmail.com",
  },
  {
    name: "Kristijan",
    age: 40,
    email: "Kico@gmail.com",
  },
  {
    name: "Sara",
    age: 20,
    email: "sara@gmail.com",
  },
];

function printEmail(obj) {
  for (let user of obj) {
    console.log(user.email);
  }
}

printEmail(users);

/* 5.4 From the object
{ name: "Marko", age: 30, city: "Zagreb" }
extract name and city. */

const person = { name: "Marko", age: 30, city: "Zagreb" };
const { name, city } = person;

console.log(name); // Marko
console.log(city); // Zagreb
