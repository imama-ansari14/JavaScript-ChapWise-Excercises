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
//Declare a variable age using const and try to reassign its value. What happens? Explain why.

const age = 18;
// age= 17
// we cant reassign const variable because JavaScript take it as constant value like pie

// QUESTION NO 3 (ChatGpt)
// Declare a global variable using var and access it inside a function.
var global = "globally declared";
function name(param) {
  console.log(global);
}
name();

//Template Literals
// QUESTION NO 1
// Create a string that includes a variable firstName = "John" and lastName = "Doe" using template literals. The output should be "My name is John Doe"

let firstName = "John";
let lastName = "Doe";
let merge = `My name is ${firstName} ${lastName}`;
console.log(merge);

// QUESTION NO 2
// Question: Create an object product = { name: "Laptop", price: 1200 }. Use a template literal to display: "The product Laptop costs $1200."

let product = { name: "Laptop", price: 1200 };
let display = `The product ${product["name"]} costs $${product["price"]}`;
console.log(display);

// QUESTION NO 3
// Question: Use a template literal to create a multi-line string that displays a poem of at least three lines.

let line1 = "The sun will rise and light the sky,";
let line2 = "Chasing the dark clouds drifting by,";
let line3 = "A new day begins, so bright and high.";
let poemOutput = `${line1}
${line2}
${line3}`;
console.log(poemOutput);

