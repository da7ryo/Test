const person = {
  name: "Sinisa",
  age: 25,
  city: "Zenica",
  introduce: function () {
    console.log(`${this.name} has ${this.age} years and lives in ${this.city}`);
  },
  isAdult: function () {
    if (this.age >= 18) {
      return true;
    } else return false;
  },
};

console.log(person);
person.introduce();
console.log(person.isAdult());
