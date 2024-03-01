//this can have different value depending upon where it is placed.

function test(a, b) {
  console.log(a);
  console.log(b);
  console.log(this.name, this.age);
}

let obj = {
  name: "aman",
  age: "28",
};
let obj1 = {
  name: "anit",
  age: "28",
};

//call() is used to change the reference or context of 'this' object
test.apply(obj, [1, 2]);

//CLASSES: classes are very commonly used in various languages, the whole concept of the class is to create to 'blue print' , commonly used as prototype..

//Constructor is a method which executes immediately as soon as we create the instance of the class.

class House {
  static customName = "Tripler";
  static description = "I triple any number you provide";
  constructor(nDoors, nWindows) {
    this.nDoors = nDoors;
    this.nWindows = nWindows;
  }

  method() {
    console.log(this.nDoors, this.nWindows);
  }
  static method2() {
    console.log("This is the static method");
  }
}

let home = new House(3, 6);
let home1 = new House(1, 2);
console.log(home);
console.log(House.customName);

class Parent {
  constructor(eyes, hair) {
    this.eyes = eyes;
    this.hair = hair;
  }
  pMethod() {
    console.log(
      `The eyes color are ${this.eyes} and the hair color is ${this.hair}`
    );
  }
}

class child extends Parent {
  constructor(hands, legs, eyes, hair) {
    super(eyes, hair);
    this.hands = hands;
    this.legs = legs;
  }

  cMethod() {
    super.pMethod();
    console.log(
      `There are ${this.hands} hands and there are ${this.legs} legs`
    );
  }
}

let obj3 = new child(2, 2, "blue", "blonde");

obj3.cMethod();
console.log(this);

// Constructor are special methods within classes that are automatically called when an object is created of the class using the new keyword

//Classes serve as blueprint for creating objects and define their structure and behaviour.
//Advantages: Object creation, Polymorphism, Inheritance, code reusability, Abstraction, Encapsulation

//CONSTRUCTOR FUNCTION: are a way of creating objects and initializing their properties
//USE OF THIS KEYWORD: this keyword provides a way to access the current object or class
//PROTOTYPE INHERITANCE: It allows objects to inherit properties and methods from parent object
