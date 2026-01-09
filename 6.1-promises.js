// Create a new Promise that simulates loading data

const loadData = new Promise((resolve, reject) => {
  // Use setTimeout to simulate asynchronous operation (2 seconds)
  setTimeout(() => {
    resolve("Data loaded"); // Resolve the promise with a message
  }, 2000);
});

loadData.then((message) => console.log(message)); // Handle the resolved promise using .then

// Function that returns a promise, checking if a number is bigger than 10

function biggerThanTen(x) {
  return new Promise((resolve, reject) => {
    if (x > 10) {
      resolve(`${x} is bigger then 10`); // If x is greater than 10, resolve the promise
    } else reject(`${x} is smaller than 10`); // If x is 10 or less, reject the promise
  });
}

biggerThanTen(14) // Call biggerThanTen with 14, handle success and error
  .then((message) => console.log("Success:", message)) // Prints if resolved
  .catch((err) => console.log("Error:", err)); // Prints if rejected

biggerThanTen(4)
  .then((message) => console.log("Success:", message)) // Won't be called
  .catch((err) => console.log("Error:", err)); // Prints the rejection

// Async function to test biggerThanTen using await

async function testNum(num) {
  try {
    const msg = await biggerThanTen(num); // Wait for the promise to resolve or reject
    console.log("Async:", msg); // Prints if resolved
  } catch (err) {
    console.log("Async Error:", err); // Prints if rejected
  }
}

testNum(77);
testNum(2);
