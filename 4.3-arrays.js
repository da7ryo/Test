const numbers = [3, 7, 12, 5, 9, 21];

console.log(numbers.filter((item) => item % 2 === 0));
console.log(numbers.map((item) => item * 2));
console.log(numbers.reduce((acc, item) => acc + item, 0));
console.log(numbers.reduce((acc, item) => acc + item, 0) / numbers.length);

const sumOdd = numbers.reduce((acc, item) => {
  if (item % 2 !== 0) {
    return acc + item;
  } else {
    return acc;
  }
}, 0);

console.log(sumOdd);
