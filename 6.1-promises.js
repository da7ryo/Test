const loadData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded");
  }, 2000);
});

loadData.then((message) => console.log(message));

function biggerThanTen(x) {
  return new Promise((resolve, reject) => {
    if (x > 10) {
      resolve(`${x} is bigger then 10`);
    } else reject(`${x} is smaller than 10`);
  });
}

biggerThanTen(14)
  .then((message) => console.log("Success:", message))
  .catch((err) => console.log("Error:", err));

biggerThanTen(4)
  .then((message) => console.log("Success:", message))
  .catch((err) => console.log("Error:", err));

async function testNum(num) {
  try {
    const msg = await biggerThanTen(num);
    console.log("Async:", msg);
  } catch (err) {
    console.log("Async Error:", err);
  }
}

testNum(77);
testNum(2);
