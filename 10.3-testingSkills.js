console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

Promise.resolve().then(() => {
  console.log('C');
});

console.log('D');

// ADCB

// Što će se ispisati i zašto:

async function test() {
  console.log(1);

  await Promise.resolve();

  console.log(2);
}

console.log(3);
test();
console.log(4);

/* 3 4 1 2 <pending>
prvo se ispisuje 3 i 4 jer se izvrsavaju u execution context a funkcija tes() se izvrsava van execution context i ceka
da call stack bude prazan, zatim se ispisuje 1 i 2, a resolve() nije nikad ispunjen
*/

// Što je vrijednost varijable result?

async function getNumber() {
  return 5;
}

const result = getNumber();
console.log(result);

// vrijednost varijable result je na cekanju "pending"
