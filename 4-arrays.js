/* 4.1
Write code that, for the array [1, 2, 3, 4, 5]:
removes the last element
adds the number 10 to the end
removes the first element
adds the number 0 to the beginning */

const array = [1, 2, 3, 4, 5];

array.pop(); // remove last element of the array
console.log(array);

array.push(10); // add element on the last index of the array
console.log(array);

array.shift(); // remove first element of the array
console.log(array);

array.unshift(0); // add element on the first index of the array
console.log(array);

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
console.log(findLongestWord(sports));

// 4.3 Sort the array of numbers [12, 5, 8, 130, 44] from smallest to largest.

const numbers = [12, 5, 8, 130, 44];
numbers.sort((a, b) => a - b); // Sorts the array from smallest to largest
console.log(numbers);

numbers.sort((a, b) => b - a); // Sorts the array from largest to smallest
console.log(numbers);
