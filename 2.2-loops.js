let str = "JavaScript"; // Create a string variable

// Loop through each character in the string

for (let znak of str) {
  console.log(znak);
}

// Function to count vowels in a string

function countVowels(str) {
  let vowels = "aeiouAEIOU"; // Define a string containing all vowels (both lowercase and uppercase)
  let count = 0; // Initialize a counter for vowels

  // Loop through each character in the input string
  for (let char of str) {
    if (vowels.includes(char)) {
      // Check if the character is a vowel
      count++; // Increment the vowel counter
    }
  }
  return count; // Return the total number of vowels found
}

console.log(countVowels("DarioMilanovic")); // Call countVowels with the string "DarioMilanovic" and print the result

const workers = [
  { name: "Mirko", age: 44, greet: "Vozdra" },
  { name: "Sandro", age: 33, greet: "Dobro jutro" },
  { name: "Sara", age: 25, greet: "Cao" },
  { name: "Nera", age: 30, greet: "Hello" },
];

// Loop through each worker in the workers array

for (let person of workers) {
  console.log(person.greet); // Print the 'greet' property of the current worker
}
