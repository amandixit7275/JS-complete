// Q1) What is javascript ?
//Ans) Js is a programming langauage i.e used for converting static webpages to interacitve and dynamic one
// Js engine isV a program present in web browser that executes js code e,g. V8 (chrome), spider monkey(Firefox)

// Q2) What are client side and server side ?
// Ans ) Client side is a device,applications, or software components that requests and consumes services or resources from a server.

/* Q3) What are variables ? What's the difference between let, var ,const
ans) Variables are use to store data, Var creates a functional scope, let creates a block-scoped, and const can be assigned only once and its value cannot be 
  
Q4) What are some important string operations in Js

*/
//add multiple string
let str1 = "Vijay";
let str2 = "Kushwaha";
let res = str1 + " " + str2;
console.log(res);
let res1 = str1.concat(str2);
console.log(res1);
//extract a portion of a string
let substr = res.substring(-1, 12);
console.log(substr);
//
console.log(res.length);
console.log(res.toLowerCase());
console.log(res.toUpperCase());
console.log(res.split(" "));
//to replace string
console.log(res.replace("Vijay", "Ajay"));
//to remove blank spaces
let str3 = "     hello javascript    ";
console.log(str3);
console.log(str3.trim());

/* What is DOM ?
Ans ) Dom stands for document object model represents the web page as a tree like structure that
 allows js to dynamically access and manipulate the content and structure of a web page

 */
document.querySelector(".heading").innerHTML = "hello chiriyanka popra";

/* What are data types is JS ? : it determines the type of  variables  */
//Short circuit evaluation stops the execution as soons as the result can be determined withoud evaluating the remaining expression
function showRes() {
  const res = true && "true statement";
  console.log(res);
}
showRes();
//What are objects in JS ?: objects are data type that allow you to store key-value pair

//what is hoising in js : Hoisting is a Js Behaviour where functions and variables declarations are moved to the top of their respective scope during compilations phase

myFunction();

function myFunction() {
  console.log("hello");
}

x = 10;

console.log(x);
var x;

//What are Scopr in Js ? Scope determines where variables are defined and where they can be assessed.

//how to handle error in Js ? : with the help of try...catch block

try {
  const res = 90 + abc;
  console.log(res);
} catch (error) {
  console.log(error);
}

//What is JSON ?: javascript object notation is a lighweighted data interchange format.

//What is asynchronous programming ?: Asynchronous programming allows multiple  tasks to be executred concurrently without blocking the exucution of the code.

//What is difference between null and undefined ?: They both are primitive data type
//undefined: variable declared, but not assigne a value;
let a;

console.log(typeof a);

//Null variables are intentionally assigned the null value, where we are not sure about value;

let b = null;
console.log(typeof b);
console.log(typeof true);

//What's the diff b/w ==(loose equality), it performs type coercion and  ===(strict equality) it doesn't performs type coercion;
console.log(1 == "1");
console.log(1 === "1");

//What is difference between Spread and Rest operator is Js ?

//The spread operator (...) is used to expand or spread element from iterable(array, string. object) into individual elements.

//use of spread operator: Copying an array, Merging Arrays, Passing multiple arguments to a function

const originalArray = [1, 2, 3];
const CopiedArray = [...originalArray];
console.log(CopiedArray);

//Merging array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr);

function sum(a, b, c, d, e, f) {
  console.log(a + b + c + d + e + f);
}
sum(...mergedArr);

//Rest operators is used in function parameters to collect all remaining agruments into an array

function display(firstelement, secondelement, thirdElement, ...restArguments) {
  console.log(firstelement);
  console.log(secondelement);
  console.log(thirdElement);
  console.log(restArguments);
}

display(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//What is set Object in Js ?: Set object is a collection of unique value, Set provides methods for adding, deleting adn checking the existence ov values in the set , it can be used to remove duplicate values.

const constVal = new Set();
//adding values to set object
constVal.add(2);
constVal.add(4);
constVal.add(6);
console.log(constVal);
//checking size
console.log(constVal.size);
//checke element existence
console.log(constVal.has(9));
//deleteing elements

constVal.delete(2);
console.log(constVal);

let myArr = [1, 2, 3, 4, 5, 4, 5, 4, 3, 2];
let mySet = new Set(myArr);
console.log(...mySet);

//find the longest word in a sentence..

let str = "Vijay kushwaha is a Gentleman";
console.log(str.split(" "));

function findLongestWord(sentence) {
  //step 1: split the sentence into an array of words
  const words = sentence.split(" ");
  let longestWord = "";
  // Step2: Iterate through each word in the array
  for (let word of words) {
    //step3: check of current word is longer than the current longest word
    if (word.length > longestWord.length) {
      //Step 4: if true, update the longestWord variable
      longestWord = word;
    }
  }
  return longestWord;
}
let str4 = "Welcome to the miss word Chiriyanka Popraa";

console.log(findLongestWord(str4));

//Find palindrome of a word: madam

function isPalindrom(name1) {
  let name2 = name1.toLowerCase();
  const reverseStr = name2.split("").reverse().join("");
  let palin =
    name2 === reverseStr
      ? `${name1} is a palindrome string`
      : `${name1} is not  a palindrome string`;
  return palin;
}
let name1 = "racecar";
console.log(isPalindrom(name1));
// check if a number is a prime or not
function isPrime(num) {
  //number less than 2 is not a prime
  for (let i = 2; i < num; i++) {
    //Step2: reminder will not be zero to be prime
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(5));

//factorial of a number

//what is difference between some() and every() method, every() return true if conditions of all the element are true

let brr = [1, 2, 3, 4, 5, 6];
const result = brr.every((item) => item > 3);
console.log(result);

// function countFreq(arr, n) {
//   const map = {};

//   // Traverse through array elements and
//   // count frequencies
//   for (let i = 0; i < n; i++) {
//     if (map[arr[i]]) {
//       map[arr[i]] += 1;
//     } else {
//       map[arr[i]] = 1;
//     }
//   }
//   console.log(map);
// }
// var arr = [10, 20, 20, 10, 10, 20, 5, 20];
// var n = arr.length;
// countFreq(arr, n);

//to sort an array
const arr = ["anit", "ajay", "vijay", "aman"];
console.log(arr.sort());

const dt = new Date();
const yr = dt.getFullYear();
const mn = dt.getMonth() + 1;
const day = dt.getDate();
console.log(`${yr}-${mn}-${day}`);

//every(): result will be true if each of the element satisfies the condition

const eveRes = [1, 2, 3, 4, 5].every((item) => item < 6);
console.log(eveRes);

//some(): result will be true if any of the element satisfied the condition

const eveRes1 = [1, 2, 3, 4, 5].some((item) => item < 5);
console.log(eveRes1);

//forEach() and map() method

//The map() method is used when you want to modify ach element of an array and create a new array with the modified value
const origArr = [1, 2, 3];
const mapARr = origArr.map((ele) => ele * 2);
console.log(mapARr);
console.log(origArr);

//the forEach() is used when you want to perform some operations on each element of an array , without creating new array

const orArr = [1, 2, 3, 4];
orArr.forEach((ele) => console.log(ele * 2));

//does not return anything
console.log(orArr);

//Question 11

function CountElementArr(arr, n) {
  let Map = {};
  for (let i = 0; i < n; i++) {
    if (Map[arr[i]]) {
      Map[arr[i]] += 1;
    } else Map[arr[i]] = 1;
  }
  return Map;
}

let array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1, 2, 3, 4];
const n = array.length;
console.log(CountElementArr(array, n));

//Q13) Check leap year

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
  } else console.log(console.log(`${year} is not a leap year`));
}
leapYear(2000);

//Q15)  date 14 years ago
let dat = new Date();
console.log(dat);
dat.setFullYear(dat.getFullYear() - 14);

console.log(dat);
console.log("*******************");

//add 1 hour and 30 minutes to current time

const date = new Date();
date.setHours(date.getHours() + 1);
date.setMinutes(date.getMinutes() + 30);
date.setSeconds(date.getSeconds() + 40);
console.log(date);

//
const students = [
  {
    id: 1,
    name: "abc",
    age: 24,
  },
  {
    id: 2,
    name: "def",
    age: 30,
  },
  {
    id: 3,
    name: "ghi",
    age: 31,
  },
];
const name2 = [];
const ageGreaterThan = [];
const ageStudents = [];

students.map((item) => {
  name2.push(item.name);
  ageStudents.push(item.age);

  if (item.age >= 30) {
    ageGreaterThan.push(item.age);
  }
});
console.log(`Name of all students ${name2}`);
console.log(
  `Age of students greatet than or equal to thirty ${ageGreaterThan}`
);

const sumAge = ageStudents.reduce((acc, cuVal) => (acc += cuVal), 0);
console.log(`Sum of age of all students ${sumAge}`);
