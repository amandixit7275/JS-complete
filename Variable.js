// var creates functional scoped variable,
// let creates blocked scoped variable,
// const can be assigned only once ,
var globalScope = "GLOBAL";
function scope() {
  var functionalScope = "FUNCTIONAL";
  if (true) {
    var blockedScope = "BlOCKED";
    console.log(globalScope);
    console.log(functionalScope);
    console.log(blockedScope);
  }
  console.log("*******");
  console.log(globalScope);
  console.log(functionalScope);
  console.log(blockedScope);
}

scope();

const a = 20;
a = 30;
console.log(a);
