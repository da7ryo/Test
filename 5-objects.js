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

// Write a function getValues(obj) that returns all the values from an object as an array.

function getValues(obj) {
  const valuesOf = [];
  for (let key in obj) {
    valuesOf.push(obj[key]);
  }
  return valuesOf;
}

console.log(getValues(car));
