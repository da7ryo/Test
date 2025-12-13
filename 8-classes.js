/* 8.1 Write a class Animal that has:
name
a method speak() that logs "Animal speaks" */

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("Animal speaks");
  }
}

// 8.2 Write a class Dog that inherits from Animal and overrides the speak() method to log "Woof!".

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log("Woof");
  }
}

// Create an object myDog and call its speak() method.

const dog1 = new Dog("Rex");
dog1.speak();
console.log(dog1);
