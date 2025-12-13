/* 6.1 Create a Promise loadData that:
after 2 seconds returns "Data loaded"
in case of an error returns "Error loading data" (use reject)
call the Promise using .then and .catch */

function loadData(timeInSec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;
      if (success) {
        resolve("Data loaded");
      } else {
        reject("Error loading data");
      }
    }, timeInSec * 1000);
  });
}

loadData(2)
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });

// 6.2 Write a function wait(ms) that returns a Promise which resolves after ms milliseconds.

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

wait(1000).then(() => {
  console.log("1 second passed");
});
