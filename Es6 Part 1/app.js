//VARIABLE SCOPING (VAR/LET/CONST)
// QUESTION NO 1 (Geminie)
if (1 === 1) {
  var broName = "arham";
  console.log(broName);

  let myname = "imama";
  console.log(myname);
}
console.log(broName);
// console.log(myname); //myname is not defined
// We can access the variable declaring with var outside the block scope but can't access the variable declaring with let.

// QUESTION NO 2
const age = 18;
// age= 17
// we cant reassign const variable because JavaScript take it as constant value like pie

// QUESTION NO 3 (ChatGpt)
// Declare a global variable using var and access it inside a function.
var global ="globally declared"
function name(param) {
 console.log(global);
 
}
name()

// QUESTION NO 4