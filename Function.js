//What are function ?
// a function is a reusable block of code that perform a specific task.

function sum(a, b) {
  return a + b;
}

const sum1 = sum(5, 5);
console.log(sum1);

//Types of function
// 1) Named function
// 2) Anonymous function:do not have a name identifier
// 3)Function Expression : function by assigning it to a variable
// 4)Arrow function
// 5)IIFE(immediately invoked function expression)
// 6)Callback function
// 7)HOF: higher order function

//Anonymous function
console.log(
  (function (a, b) {
    return a * b;
  })(6, 7)
);

//Arrow function: a simple a shorter way

const add = (a, b) => a + b;
console.log(add(9, 9));

//Function expression
const add1 = function (a, b) {
  return a * b;
};
console.log(add1(5, 6));

//Callback function: function that is passed as an argument to another function, callback functions are used to handle asynchronous process in javascript

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function add4(a, b) {
  return a + b;
}
//HOF:takes callback function an
function display(x, y, operations) {
  return operations(x, y);
}

console.log(display(6, 6, add4));

console.log("*******");

function sqr(a, cb) {
  setTimeout(() => {
    cb(a * a);
  }, 1000);
}

sqr(2, (res) => {
  console.log(res);
  sqr(res, (res1) => {
    console.log(res1);
    sqr(res1, (res2) => {
      console.log(res2);
      sqr(res2, (res3) => {
        console.log(res3);
      });
    });
  });
});
