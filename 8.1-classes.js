class Auto {
  constructor(brand, age) {
    this.brand = brand;
    this.age = age;
  }

  describe() {
    console.log(`This car is ${this.brand} and bulit ${this.age} year`);
  }
}

const bmw = new Auto('bmw', 2017);
console.log(bmw);
bmw.describe();
