for (let i = 0; i < 21; i++) {
  console.log(i);
}

for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let names = ["Marko", "Ivan", "Ana", "Petra"];

for (let name of names) {
  console.log(name);
}

const user1 = {
  name: "Dario",
  surname: "Milanovic",
  birtYear: 1992,
  age: function () {
    return 2025 - this.birtYear;
  },
};

console.log(user1.age());

function getValues(obj) {
  let values = [];
  for (let key in obj) {
    values.push(obj[key]);
    console.log(key, obj[key]);
  }
  return values;
}

console.log(getValues(user1));

let evenNum = [];

for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    console.log(i);
    evenNum.push(i);
  }
}

console.log(evenNum);

function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArr(evenNum));

function processArray(arr, cb) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currentElement = cb(arr[i]);
    newArr.push(currentElement);
  }
  return newArr;
}

function multBy4(a) {
  return a * 4;
}
console.log(processArray(evenNum, multBy4));

const evenNumMultBy4 = processArray(evenNum, multBy4);

console.log(evenNumMultBy4.filter((item) => item > 100));
