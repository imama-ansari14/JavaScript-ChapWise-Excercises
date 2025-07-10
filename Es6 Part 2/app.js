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

