// ARROW FUNCTION
// QUESTION NO 1
//  Create an arrow function named sayHello that takes no parameters and logs "Hello, World!" in the console.Then call the function.
let sayhello = () => {
  console.log("Hello, World!");
};
sayhello();

// QUESTION NO 2
// Write an arrow function named square that takes one number as a parameter and returns its square.Call the function with 5 and log the result.
let square = (num) => {
  console.log(num * num);
};
square(5);

// QUESTION NO 3
// Create an arrow function called isEven that takes a number as input and returns true if it is even, otherwise false.Test it by calling with numbers 8 and 7.
let isEven = (even) => {
  return even % 2 === 0;
};
console.log(isEven(8));
console.log(isEven(7));

// QUESTION NO 4
// Make an arrow function called addNum that takes two numbers as input and returns their sum.Call the function with 10 and 20, then log the output.
let addNum = (a, b) => {
  return a + b;
};
console.log(addNum(10, 20));

// QUESTION NO 5
// Create an arrow function named getArea that takes two parameters: length and width.The function should return the area of a rectangle (length × width).Call the function with values 5 and 10, then log the result.
let getArea = (length, width) => {
  return length * width;
};
console.log(getArea(5, 10));

// TERNARY OPERATOR
// QUESTION NO 1
// Create a variable with a number.Use a ternary operator to check if it is even or odd.Print "Even" if true, otherwise "Odd".
let input = 8; // also use prompt here

let checker = input % 2 === 0 ? "Even" : "Odd";

console.log(checker);

// QUESTION NO 2
// Ask the user’s age (assign any numbser to a variable).Use a ternary operator to print "Eligible to vote" if age is 18 or more, otherwise "Not eligible".
let ageInp = 20; // also use prompt here

let userAge = ageInp >= 18 ? "Eligible to vote" : "Not Eligible";

console.log(userAge);

// QUESTION NO 3
// Create a variable isLoggedIn = true or false. Use a ternary operator to print "Welcome back!" if true, otherwise "Please login".
let isLoggedIn = true;
let greets = isLoggedIn === true ? "Welcome back!" : "Please login";
console.log(greets);

// QUESTION NO 4
// Create a variable with marks.
// Use nested ternary to print:
// "A+" if marks ≥ 90
// "A" if marks ≥ 80
// "B" if marks ≥ 70
// "C" if marks ≥ 60
// "Fail" otherwise
let marks = 93;
let result =
  marks >= 90
    ? "A+"
    : marks >= 80
    ? "A"
    : marks >= 70
    ? "B"
    : marks >= 60
    ? "C"
    : "Fail";
console.log(result);

// PROMISES
// QUESTION NO 1
// Make a promise that always resolves with the message "Data loaded successfully".Use .then() to print that message in the console.
let app = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data loaded successfully");
  } else {
    reject("Data not found");
  }
});

app
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

// QUESTION NO 2
// Make a promise that always rejects with the message "Data failed to load".Use .catch() to show that error in the console.
let dataCheck = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve("Data loaded successfully");
  } else {
    reject("Data failed to load");
  }
});

dataCheck
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

