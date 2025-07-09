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

// QUESTION NO 4
let course = "JavaScript";
let duration = "6 weeks";
let enrolled = `You have enrolled in the ${course} course which lasts for ${duration}.`;
console.log(enrolled);

// QUESTION NO 5
let user = { name: "Ali", age: 22, city: "Karachi" };
let data = `${user["name"]} is ${user["age"]} years old and lives in ${user["city"]}.`;
console.log(data);

// QUESTION NO 6
function greetUser(name, time) {
  let greetings = `Good ${time},${name}`;
  console.log(greetings); //show output
  return greetings; //Question Requirement
}
greetUser("Ahmed", "morning");

// QUESTION NO 7
let language = "JavaScript";
let difficulty = "Intermediate";
let challange = `Learning ${language} is an ${difficulty} level challenge.`;
console.log(challange);

// QUESTION NO 8
let item = "Book";
let cost = 500;
let recipt = `Receipt:
Item: ${item}
Cost: ${cost}
Thank you for your purchase!`;
console.log(recipt);

// DEFAULT PARAMETERS
// QUESTION NO 1
function greetUser(name = "Guest") {
  console.log(`Hello,${name}`);
}
greetUser();

// QUESTION NO 2
function calculateArea(length = 1, width = 1) {
  console.log(length * width);
  return length * width;
}
calculateArea();

// QUESTION NO 3
function sendEmail(To, subject = "No Subject", body = "No Content") {
  let message = `To:${To}, Subject: ${subject}, Body: ${body}!`;
  console.log(message);
}
sendEmail("someone@example.com", "Hello", "Welcome");

// QUESTION NO 4
function createProfile(name = "Anonymous", age = 0, country = "Unknown") {
  // console.log(createProfile);
  return {
    name: name,
    age: age,
    country: country,
  };
}
console.log(createProfile());

// REST PARAMETERS
// QUESTION NO 1
// Create a function printAll that accepts any number of arguments and prints them one by one in the console.

function printAll(...num) {
  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
  }
}
printAll(1, 2, 3, 4, 5);

// QUESTION NO 2
function func(userName, ...para) {
  console.log(userName);
  console.log(...para);
}
func("Imama", "HTML", "CSS", "JS");

// SPREAD OPERATORS
// QUESTION NO 1
const numbersOne = ["imama", "khizra", "warisha", "hareem"];
const numbersTwo = ["hina", "arham"];
const mix = [...numbersOne, ...numbersTwo];
console.log(mix);

// QUESTION NO 2
const fruits = ["apple", "banana"];
console.log(fruits);
const newFruits = [...fruits, "mango"];
console.log(newFruits);

// QUESTION NO 3
//Create two arrays: frontend and backend. Use the spread operator to combine them into one new array called fullStack, then print it.

let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["node.js", "supabase", "firebase"];
let fullStack = [...frontend, ...backend];
console.log(fullStack);

