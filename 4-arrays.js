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
