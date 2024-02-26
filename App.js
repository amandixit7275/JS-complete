// What are Array ?
//An array is a data type that allows you to store mulitiple values in a single variable

//There are multiple methods with which we can get, add, remove, modify, others.

//To get an element from an array..: indexOF(), find(), filter(), slice()
//indexOf(): to get the index of a specified element in the array
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.indexOf(3);
console.log(a);

//find(): to get the first element that satisfies the condition
const b = arr.find((ele) => {
  return ele % 2 === 0;
});

console.log(b);
//filter(): get an array of elements that satisfies a condition

const c = arr.filter((ele) => {
  return ele % 2 === 0;
});
console.log(c);
//slice():to get the subset of an array

const d = arr.slice(0, 5);
console.log(d);
//To add an element in an array,push(), concat()
//push(): to add elmentes at the end of array, it modifies the original array

arr.push(7, 8, 9, 13, 12);
console.log(arr);
//concat():to creates a new array
const arr1 = arr.concat(13, 12);
console.log(arr1);
console.log(arr);

//to remove an element pop(), shift(), both modifies the original array
//pop(): will remove the last element of an array

let arb = [2, 3, 4, 5];
let f = arb.pop();
console.log(f);
console.log(arb);
//shift(): remove the first element
let g = arb.shift();
console.log(g);
console.log(arb);

//splice(): to add, remove or replace element,
//arr.splice(startIndex, deleteCount, ...ItemsToAdd)
let letters = ["a", "b", "c"];
//Add 'x' and 'y' at index 1

letters.splice(1, 0, "x", "y");
console.log(letters);

//remove 1 element starting from index 1
letters.splice(0, 1);
console.log(letters);

//replace the element at index 2 with 'q'
letters.splice(2, 1, "q");
console.log(letters);

let ard = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(ard.map((ele) => ele % 2 === 0));

//Array destructuring allows you ot extract elements from an array and assing them to individul variables in a single statement

const fruits = ["apple", "banana", "orange"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);
