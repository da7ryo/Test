/* 2.1
Write a loop that prints numbers from 1 to 20. */

function printNumbers() {
  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
}

printNumbers();

/* 2.2
Write a loop that prints all even numbers up to 100. */

function evenNum() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

evenNum();

/* 2.3
Write a function sumArray(arr) that sums all the numbers in an array. */

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    sum += currentNum;
  }
  return sum;
}

const ages = [2, 5, 11, 42, 48];
console.log(sumArray(ages));
