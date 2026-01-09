function square(a) {
  return a * a;
}

function biggerNum(a, b) {
  if (a > b) {
    console.log(a);
  } else console.log(b);
}

console.log(square(8));
biggerNum(5, 44);

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  } else return false;
}

console.log(isEven(8));
