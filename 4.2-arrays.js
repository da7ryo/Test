const myArr = [4, 7, 24, 47, 22, 33];
myArr.pop(); // Remove the last element from the array
console.log(myArr);
myArr.shift(); // Remove the first element from the array
console.log(myArr);
myArr.unshift(100); // Add 100 at the beginning of the array
console.log(myArr);

// Sort the array in descending order (from largest to smallest)
// a - b < 0 → a comes before b; a - b > 0 → b comes before a
// for ascending, use (a, b) => a - b

myArr.sort((a, b) => b - a);
console.log(myArr);

let words = [
  'JavaScript',
  'programiranje',
  'računalo',
  'internet',
  'funkcija',
  'petlja',
  'array',
  'string',
];

// Function to find the longest word in an array of strings

function findLongestWord(arr) {
  let longest = ''; // Initialize a variable to store the longest word, start with an empty string

  // Loop through each word in the array
  for (let word of arr) {
    // Check if the current word is longer than the current longest word
    if (word.length > longest.length) {
      longest = word; // Update the longest word
    }
  }
  return longest;
}
console.log(findLongestWord(words));
