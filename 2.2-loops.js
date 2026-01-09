let str = "JavaScript";

for (let znak of str) {
  console.log(znak);
}

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("DarioMilanovic"));

const workers = [
  { name: "Mirko", age: 44, greet: "Vozdra" },
  { name: "Sandro", age: 33, greet: "Dobro jutro" },
  { name: "Sara", age: 25, greet: "Cao" },
  { name: "Nera", age: 30, greet: "Hello" },
];

for (let person of workers) {
  console.log(person.greet);
}
