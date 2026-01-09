function checkNum(num) {
  if (num > 0) {
    console.log(" The number is positive");
  } else if (num === 0) {
    console.log("The number is null");
  } else console.log("The number is negative");
}

checkNum(0);
checkNum(3);
checkNum(-8);

function canDrive(age) {
  if (age >= 18) {
    return "You can drive";
  } else {
    return "You are too young";
  }
}
