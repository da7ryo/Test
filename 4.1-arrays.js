const numbers = [10, 20, 30, 40];
// acc = rezultat do sada; item = trenutni element

const average = numbers.reduce((acc, item) => acc + item, 0) / numbers.length; // prosjek
const sum = numbers.reduce((acc, item) => acc + item, 0); // suma
const max = numbers.reduce((acc, item) => (item > acc ? item : acc)); // m´najveci broj

console.log(average);
console.log(sum);
console.log(max);

function countEvenNum(arr) {
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countEvenNum(numbers));

const names = ["Dario", "Mile", "Slaven", "Ela", "Ivan"];

function longWords(arr) {
  let longWord = [];
  for (let word of arr) {
    if (word.length >= 5) {
      longWord.push(word);
    }
  }
  return longWord;
}
console.log(longWords(names));
const long = names.filter((item) => item.length >= 5);
console.log(long);
