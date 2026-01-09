// Loop from 0 to 20 (inclusive)

for (let i = 0; i < 21; i++) {
  console.log(i);
}

// Loop from 0 to 50 (inclusive)

for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let names = ["Marko", "Ivan", "Ana", "Petra"];

// Loop through each element in the names array

for (let name of names) {
  console.log(name);
}

const user1 = {
  name: "Dario",
  surname: "Milanovic",
  birtYear: 1992,
  age: function () {
    return 2025 - this.birtYear;
  },
};

console.log(user1.age());

// Function to get all values from an object

function getValues(obj) {
  let values = []; // Create an empty array to store the values

  // Loop through each key in the object

  for (let key in obj) {
    values.push(obj[key]);
    console.log(key, obj[key]);
  }
  return values;
}

console.log(getValues(user1));

let evenNum = []; // Create an empty array to store even numbers

// Loop from 0 to 100 (inclusive)

for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    console.log(i); // Print the even number
    evenNum.push(i); // Add the even number to the evenNum array
  }
}

console.log(evenNum);

// Function to calculate the sum of all elements in an array

function sumArr(arr) {
  let sum = 0; // Initialize sum to 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add the current element to the sum
  }
  return sum; // Return the total sum
}

console.log(sumArr(evenNum));

// Function that processes an array using a callback function

function processArray(arr, cb) {
  const newArr = []; // Create a new array to store processed elements
  for (let i = 0; i < arr.length; i++) {
    let currentElement = cb(arr[i]); // Apply the callback function to the current element
    newArr.push(currentElement); // Add the processed element to the new array
  }
  return newArr;
}

// Function that multiplies a number by 4

function multBy4(a) {
  return a * 4;
}
console.log(processArray(evenNum, multBy4)); // Process evenNum array by multiplying each element by 4, then print the result

const evenNumMultBy4 = processArray(evenNum, multBy4); // Store the processed array in a variable

console.log(evenNumMultBy4.filter((item) => item > 100)); // Filter the processed array to include only numbers greater than 100, then print the result
