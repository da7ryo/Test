// Function that returns a Promise simulating data loading with a delay

function loadData(timeInSec) {
  return new Promise((resolve, reject) => {
    // Use setTimeout to simulate asynchronous operation
    setTimeout(() => {
      const success = false; // Simulate success or failure
      if (success) {
        resolve("Data loaded"); // Resolve the promise if successful
      } else {
        reject("Fail"); // Reject the promise if failed
      }
    }, timeInSec * 1000); // Delay in milliseconds
  });
}

loadData(3) // Call loadData with 3 seconds delay
  .then((val) => {
    console.log(val); // Called if promise resolves successfully
  })
  .catch((err) => {
    console.log(err); // Called if promise is rejected
  });

// Function that returns a Promise simulating reading a file with a delay

function readFile(ms) {
  return new Promise((resolve, reject) => {
    // Use setTimeout to simulate asynchronous operation
    setTimeout(() => {
      const buttonOn = true; // Change to false to simulate failure
      if (buttonOn) {
        resolve("Upaljeno"); // Resolve the promise if condition is true
      } else {
        reject("Ugaseno"); // Reject the promise if condition is false
      }
    }, ms); // Delay in milliseconds
  });
}

readFile(2000)
  .then((item) => console.log(item)) // Prints "Upaljeno" if resolved
  .catch((err) => console.log(err)); // Prints "Ugaseno" if rejected
