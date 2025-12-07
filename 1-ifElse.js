/* 1.1
Write a function checkTemperature(temp) that prints:
"Hot" if temp > 30
"Comfortable" if temp is between 15 and 30
"Cold" if temp < 15 */

function checkTemperature(temp) {
  if (temp > 30) {
    console.log("Hot");
  } else if (temp >= 15) {
    console.log("Comfortable");
  } else console.log("Cold");
}

checkTemperature(31);

function checkTemperature1(num) {
  console.log(num > 30 ? "Hot" : num >= 15 ? "Comfortable" : "Cold");
}

checkTemperature1(15);

/* 1.2
Write a function canDrive(age) that returns true if a person is 18 or older, otherwise false. */

function canDrive(age) {
  if (age >= 18) {
    return true;
  } else return false;
}

console.log(canDrive(19));

/* 1.3
Write a function grade(score) that returns a grade:
90–100: "Excellent"
75–89: "Very Good"
50–74: "Good"
< 50: "Fail" */

function grade(score) {
  if (score >= 90) {
    console.log("Excellent");
  } else if (score >= 75) {
    console.log("Very Good");
  } else if (score >= 50) {
    console.log("Good");
  } else console.log("Fail");
}

grade(40);
grade(58);
grade(88);
grade(99);
