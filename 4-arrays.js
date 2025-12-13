/* 4.1
Write code that, for the array [1, 2, 3, 4, 5]:
removes the last element
adds the number 10 to the end
removes the first element
adds the number 0 to the beginning */

const array = [1, 2, 3, 4, 5];

array.pop(); // remove last element of the array
console.log(array); // [ 1, 2, 3, 4 ]

array.push(10); // add element on the last index of the array
console.log(array); // [ 1, 2, 3, 4, 10 ]

array.shift(); // remove first element of the array
console.log(array); // [ 2, 3, 4, 10 ]

array.unshift(0); // add element on the first index of the array
console.log(array); // [ 0, 2, 3, 4, 10 ]

// 4.2 Write a function findLongestWord(words) that returns the longest word from the array.

function findLongestWord(arr) {
  let longest = "";
  for (let word of arr) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

const sports = ["football", "basketball", "tenis", "volleyball", "baseball"];
console.log(findLongestWord(sports)); // basketball

// 4.3 Sort the array of numbers [12, 5, 8, 130, 44] from smallest to largest.

const numbers = [12, 5, 8, 130, 44];
numbers.sort((a, b) => a - b); // Sorts the array from smallest to largest
console.log(numbers); // [ 5, 8, 12, 44, 130 ]

numbers.sort((a, b) => b - a); // Sorts the array from largest to smallest
console.log(numbers); // [ 130, 44, 12, 8, 5 ]

// 4.4 Merge two arrays [1, 2, 3] and [4, 5, 6] into one using ... (spread operator).

let mergedArr = [...array, ...numbers];
console.log(mergedArr); // [ 0,  2,  3, 4, 10, 130, 44, 12, 8,  5 ]

/* 4.4 For the array [1, 2, 3, 4, 5, 6]:
create a new array where all numbers are multiplied by 3 (map)
create a new array that contains only even numbers (filter) */

const arr2 = [1, 2, 3, 4, 5, 6];
const multBy3 = arr2.map((item) => item * 3);
console.log(multBy3); // [ 3, 6, 9, 12, 15, 18 ]

console.log(multBy3.filter((item) => item % 2 === 0)); // [ 6, 12, 18 ]
