const myArr = [4, 7, 24, 47, 22, 33];
myArr.pop();
console.log(myArr);
myArr.shift();
console.log(myArr);
myArr.unshift(100);
console.log(myArr);

myArr.sort((a, b) => b - a);
console.log(myArr);

let words = [
  "JavaScript",
  "programiranje",
  "računalo",
  "internet",
  "funkcija",
  "petlja",
  "array",
  "string",
];

function findLongestWord(arr) {
  let lognest = "";
  for (let word of arr) {
    if (word.length > lognest.length) {
      lognest = word;
    }
  }
  return lognest;
}
console.log(findLongestWord(words));
