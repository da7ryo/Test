function loadData(timeInSec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;
      if (success) {
        resolve("Data loaded");
      } else {
        reject("Fail");
      }
    }, timeInSec * 1000);
  });
}

loadData(3)
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

function readFile(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const buttonOn = true;
      if (buttonOn) {
        resolve("Upaljeno");
      } else {
        reject("Ugaseno");
      }
    }, ms);
  });
}

readFile(2000)
  .then((item) => console.log(item))
  .catch((err) => console.log(err));
