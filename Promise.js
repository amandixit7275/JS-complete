//callback hell, also known as the pyramid of doom, refers to the situation when multiple nested callbacks are used, leading to code that becomes difficult to read, understand and maintain, it creates inversion of control,Now  a days , callback functions are replaced with promises & async , await.

//PROMISE:1 ) Promises in javascript are a way to handle asynchronous operations
// 2) A Promise can be one of these states: Pending, resolved, or rejected.
// 3) A promise represents a value that may not be available but will be available at some point of time

// let pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("RESOLVED");

//     reject("some error occured");
//   }, 1000);
// });

// pr.then((msg) => {
//   console.log(msg);
// })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally executed");
//   });

// function sqr(a) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a * a);

//       reject("some error occured");
//     }, 1000);
//   });
// }

// // sqr(2)
//   .then((val) => {
//     console.log(val);
//     return sqr(val);
//   })
//   .then((val1) => {
//     console.log(val1);
//     return sqr(val1);
//   })
//   .then((val2) => {
//     console.log(val2);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log("finally implemented"));

// let pr1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("PROMISE 1");
//   }, 3000);
// });

// let pr2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("PROMISE 2");
//     // reject("Rejected");
//   }, 2000);
// });
// let pr3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("PROMISE 3");
//   }, 1000);
// });
//Promise.all: when we have multiple promises as input , it should return a single promise after all promise are resolved, then we use Promise.all()

// Promise.race([pr2, pr1, pr3]).then((prMsg) => {
//   console.log(prMsg);
// });

//Promise.allSettled() methods waits for all promise regardless of their states and returns promses at the end;

//Promise.race() returns a promise as soon as anay of the promise return the state from the iterable list provided.

//Async , Await handles promises , but with simple syntax,
//async keyword is used to define a function as an asynchronous function, which means the code inside async function will not block the execution ..
//await keyword is used within async function to pause the execution of the function until a Promise is resolved or rejected.

// function sqr(a) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   resolve(a * a);

//       reject("some error occured");
//     }, 1000);
//   });
// }

// async function showRes() {
//   try {
//     let res1 = await sqr(2);
//     console.log(res1);
//     let res2 = await sqr(res1);
//     console.log(res2);
//     let res3 = await sqr(res2);
//     console.log(res3);
//     let res4 = await sqr(res3);
//     console.log(res4);
//   } catch (err) {
//     console.log(err);
//   }
// }

// showRes();

// body -> chairs -> engine -> wheels

function makebody() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const body = "🚖";
      console.log("The body is delivered", body);
      resolve(body);
    }, 1000);
  });
}
function makeChair(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // const chair = input + "🦽";
      // console.log("The chair is delivered", chair);
      // resolve(chair);
      reject("Some error occured");
    }, 1000);
  });
}
function assembleEngine(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const engine = input + "🚂";
      console.log("The body is delivered", engine);
      resolve(engine);
    }, 500);
  });
}
function assembleWheel(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const wheel = input + "🌌";
      console.log("The wheel is delivered", wheel);
      resolve(wheel);
    }, 500);
  });
}

async function showRes() {
  try {
    let res1 = await makebody();
    let res2 = await makeChair(res1);
    let res3 = await assembleEngine(res2);
    let res4 = await assembleWheel(res3);
    console.log("The Car has been made " + res4);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Process ended");
  }
}

showRes();
