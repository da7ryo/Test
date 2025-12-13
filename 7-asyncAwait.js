/* 7.1 Write an async function getUser() that waits 1 second and then returns the object:
{ name: "Ana", age: 25 } */

async function getUser() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return { name: "Ana", age: 25 };
}

getUser().then((user) => {
  console.log(user);
});

// 7.2 Write an async function start() that calls getUser() and logs the result.

async function start() {
  const user = await getUser();
  console.log(user);
}

start();
