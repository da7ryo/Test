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
