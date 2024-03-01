// // Object is a data type that allows you to store key-value pairs., String , numbers, boolean , undefined, Array, Function,Object

// //we can create and initialize an object in following ways..
// //1) Object Literal
// var person = {
//   name: "Rocky",
//   age: 32,
//   role: "Gangster",
//   habit() {
//     console.log(this.name);
//     console.log(this.age);
//   },
// };

// //Object constrctor

// var person1 = new Object();
// person1.name = "Pushpa";
// person1.age = 45;
// console.log(person1);
// // //Object.create() Method

// var person3 = {
//   name: "",
//   age: null,
//   role: "",
//   gender: "",
// };
// var men = Object.create(person3);
// men.name = "Anit";
// men.age = 27;
// men.role = "Senior Developer";
// console.log(men);
// /////////////////

// let name1 = "Shalu";
// let age = 22;
// let per = {
//   name1,
//   age,
// };
// console.log(per);

// let key = "name";
// result = "method";
// var person4 = {
//   [key]: "aman",
//   age: 28,
//   [result]() {
//     console.log(this.name, this.age);
//   },
// };
// console.log(person4.name);
// person4.method();

// //How do you add or modify delete properties of an object
// var men = {};
// //adding properties
// men.name = "Sheetal";
// men.age = 25;
// men.country = "India";
// console.log(men);
// //modify
// men.age = 59;
// console.log(men);
// //delete
// delete men.age;
// console.log(men);

// //how do check if a propety exists in an object ?

// var female = {
//   name: "Dara",
//   age: 21,
// };
// console.log("name" in female);
// console.log("city" in female);

// console.log(female.hasOwnProperty("name"));
// console.log(female.name !== undefined);

//some method to iterate over the properties of an object
// let obj = {
//   name: "Anthony",
//   sirName: "Godsalvis",
//   obj1: { name1: "Anthony1", sirName1: "Godsalvis1" },
// };

//for..in loop

// for (prop in obj) {
//   console.log(prop + " : " + obj[prop]);
// }

// //Object.key() & forEach()
// Object.keys(obj).forEach((prop) => {
//   console.log(prop + " : " + obj[prop]);
// });

// Object.values(obj).forEach((value) => {
//   console.log(value);
// });

//Ways to clone or copy an object

const orginalObject = {
  name: "Happy",
  age: 23,
  city: "Lucknow",
};
//using spread operator
const cloneObjectSpred = { ...orginalObject };
console.log(cloneObjectSpred);
cloneObjectSpred.state = "Uttar Pradesh";
console.log(cloneObjectSpred);
console.log(orginalObject);

// using Object.assign()

const cloneObjectAssign = Object.assign({}, orginalObject);
console.log(cloneObjectAssign);
cloneObjectAssign.state = "Uttar Pradesh";
console.log(cloneObjectAssign);
console.log(orginalObject);

const copyOriginalObject = orginalObject;
console.log(copyOriginalObject);
copyOriginalObject.state = "United Province";

//Set Object : is a collection of unique value,

const uniqueNum = new Set();
//to add element
uniqueNum.add(1);
uniqueNum.add(2);
uniqueNum.add(3);
uniqueNum.add(2);
console.log(uniqueNum);
//to check size
console.log(uniqueNum.size);
//to conver into array , with spread operator
let setArr = [...uniqueNum];
console.log(setArr);
//to check elment existence

console.log(uniqueNum.has(2));

//to delete element
uniqueNum.delete(2);
console.log(uniqueNum);

//Map Object: The map object is a collection of key-value pair, key can be of any type, each value can also be of any type
//A map maintains the order of key-value pairs as they are inserted

const personDetails = new Map();
console.log(personDetails);
personDetails.set("name", "Aman");
personDetails.set(1, "true");
personDetails.set(true, 1);
console.log(personDetails);

console.log(personDetails.size);
//exitence
console.log(personDetails.has("name"));
//delete
personDetails.delete("name");
console.log(personDetails);
console.log(personDetails.get(1));
