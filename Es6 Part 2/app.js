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
//   DESTRUCTURING
// QUESTION NO 1
let namesArr = ["Ali", "Ahmed", "Sara"];
let [a, b, c] = namesArr;
console.log(a);
console.log(b);
console.log(c);

// QUESTION NO 2
let shopObj = { brand: "Nike", price: 5000 };
let { brand, price } = shopObj;
console.log(brand);
console.log(price);

// QUESTION NO 3
let numArr = [1, 2, 3, 4];
let [x, , , z] = numArr;
console.log(x);
console.log(z);

// QUESTION NO 4
let bioObj = { fullName: "Imama Ansari", age: 18 };
let { fullName: user, age } = bioObj;
console.log(user);

// QUESTION NO 5
let subObj = { subject: "Math", mark: 95 };
let { subject, mark } = subObj;
console.log(subject);
console.log(mark);

//   SET TIME OUT
// QUESTION NO 1
// Write a setTimeout() that shows the message "Welcome to my site!" after 3 seconds.
setTimeout(() => {
  console.log("Welcome to my site!");
}, 3000);

// QUESTION NO 2
// When a function named sayHello() is called, it should log "Hello Imama!" after 1 second using setTimeout().
const sayHello = () => {
  setTimeout(() => {
    console.log("Hello Imama!");
  }, 1000);
};
sayHello();

// QUESTION NO 3
// Create a button in HTML. When clicked, it should use setTimeout() to show "You clicked the button!" after 2.5 seconds in the alert.
function showAlert() {
  setTimeout(() => {
    alert("You clicked the button!");
  }, 2500);
}

// QUESTION NO 4
// Use an arrow function inside setTimeout() to print "Learning is fun!" after 1000 milliseconds.
setTimeout(() => {
  console.log("Learning is fun!");
}, 1000);

// QUESTION NO 5
// Define a function called showMessage that displays "Thanks for waiting!" in an alert box after 4 seconds, when you call it.
let showMessage = () => {
  setTimeout(() => {
    alert("Thanks for waiting!");
  }, 4000);
};
showMessage();

// CLOSURE
// QUESTION NO 1
// Create a function createToggle() that returns another function which switches between "ON" and "OFF" each time it's called.
let toggle = () => {
  let state = false;
  return function switches() {
    state = !state;
    if (state === true) {
      return "ON";
    } else {
      return "OFF";
    }
  };
};

const myToggle = toggle();
console.log(myToggle()); // "ON"
console.log(myToggle()); // "OFF"

// QUESTION NO 2
//Write a function createIDGenerator() that returns a function which returns the next ID (starting from 1001) each time it's called.
function createIDGenerator() {
  let id = 1000;
  return function () {
    id++;
    return id;
  };
}

const getNextID = createIDGenerator();

console.log(getNextID()); // 1001
console.log(getNextID()); // 1002
console.log(getNextID()); // 1003

