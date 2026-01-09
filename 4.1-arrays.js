const numbers = [10, 20, 30, 40];
// acc = accumulator (the result so far), item = current element

// Calculate the average of the numbers using reduce
// Start the accumulator at 0
// Add each item to the accumulator, then divide by the length of the array
const average = numbers.reduce((acc, item) => acc + item, 0) / numbers.length;

// Calculate the sum of all numbers using reduce
// Start the accumulator at 0 and add each item
const sum = numbers.reduce((acc, item) => acc + item, 0);

// Find the maximum number in the array using reduce
// Compare the current item with the accumulator; return the larger value
const max = numbers.reduce((acc, item) => (item > acc ? item : acc));

console.log(average);
console.log(sum);
console.log(max);

// Function to count how many even numbers are in an array

function countEvenNum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countEvenNum(numbers));

const names = ["Dario", "Mile", "Slaven", "Ela", "Ivan"];

// Function to filter words that have length >= 5

function longWords(arr) {
  let longWord = [];

  // Loop through each word in the input array
  for (let word of arr) {
    if (word.length >= 5) {
      longWord.push(word);
    }
  }
  return longWord;
}
console.log(longWords(names));

// Use the filter method to create a new array with words that have length >= 5
// 'item' represents each element in the names array

const long = names.filter((item) => item.length >= 5);
console.log(long);
