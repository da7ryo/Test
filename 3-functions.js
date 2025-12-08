// 3.1  Write a function multiply(a, b) that returns the result of multiplication.

function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 6));

/* 3.2
Write a function calculate(a, b, callback) where the callback can be:
a function for addition
a function for subtraction
Call calculate with both callbacks. */

function calculate(a, b, callback) {
  return callback(a, b);
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

console.log(calculate(7, 14, add));
console.log(calculate(7, 14, sub));

/* 3.3
Write a function processArray(arr, callback) that calls the callback on each element of the array.
Example callback: a function that multiplies each number by 2. */

function processArray(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const processedElement = callback(currentElement);
    newArr.push(processedElement);
  }
  return newArr;
}

const numbers = [7, 14, 19, 22, 38, 50];
function multByTwo(a) {
  return a * 2;
}

console.log(processArray(numbers, multByTwo));
