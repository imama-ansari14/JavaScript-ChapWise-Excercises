// QUESTION NO 01
let city= prompt ("Enter your city name")
if (city=="karachi") {
    alert("Welcome to the city of lights")
} else{
    alert("Welcome to the " + city)
}

// QUESTION NO 02
let gender = prompt("Tell me your gender please!");
if (gender === "male") {
  alert("Good Morning Sir");
} else if (gender === "female") {
  alert("Good Morning Maam");
} else {
  alert("Good Morning");
}

// QUESTION NO 03
let trafficColor = prompt("Enter the color of the traffic signal:")
if (trafficColor === "red") {
      alert("Must Stop");
    } else if (trafficColor ==="yellow") {
      alert("Ready to move");
    } else if (trafficColor === "green") {
      alert("Move now");
    }else {
        alert("Invalid color entered");
    }

// QUESTION NO 04
let fuel = +prompt("Enter the remaining fuel in your car in liters");
if (fuel < 0.25) {
        alert("Please refil the fuel in your car");
} else   {
    alert("Fuel level is sufficient");
}

// QUESTION NO 05
// a)
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
// OUTPUT : given condition for variable a is true
// b)
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
// OUTPUT : No alert will be shown
// c)
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
// OUTPUT:condition 2 is true / condition 4 is true
// d)
var materialCost = 20000;
var laborCost =2000;
var totalCost=materialCost+laborCost

if (totalCost === laborCost + materialCost) {
  alert("the cost equals")
}
// OUTPUT : the cost equals

// e)
if (true) {
  alert("True")
}
if (false) {
  alert("False")
}
// OUTPUT :True

// f)
if ("car"<"cat") {
  alert("car is smaller than cat")
}
// OUTPUT: car is smaller than cat

// QUESTION NO 06
let mathsMarks = +prompt("enter your Maths Marks");
let phyMarks = +prompt("enter your Physics Marks");
let compMarks = +prompt("enter your Computer Marks");

// // OBTAINED MARKS OF ALL SUBJECTS
let obtMarks = mathsMarks + phyMarks + compMarks;
// // TOTAL MARKS OF ALL SUBJECTS
let total = 300;
// PERCENTAGE OF ALL SUBJECTS
let percentage = (obtMarks / total) * 100;
// GRADE AND REMARKS
let grade = "";
let remarks = "";

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("<p>Total Marks :" + total + "</p>");
document.write("<p>Marks Obtained :" + obtMarks + "</p>");
document.write("<p>Percentage :" + percentage + "</p>");
document.write("<p>Grade :" + grade + "</p>");
document.write("<p>Remarks :" + remarks + "</p>");

// QUESTION NO 07
let secretNum=4
let guessNum= +prompt("Guess the secret number (1 to 10)")

if (guessNum === secretNum) {
  alert("Bingo! Correct answer")
}else if(guessNum-1 === secretNum ){
  alert("Close enough to the correct answer");
}
 else {
  alert("Wrong guess, try again");
}

// QUESTION NO 08
let givenNum=+prompt("write your frav number to check whether it is divisible by 3 or not!")
let result = givenNum%3

if (result===0) {
    alert (givenNum+" is divisible by 3")
} else if (result===1){
    alert (givenNum+" is not divisible by 3")
}

// QUESTION NO 09
let givInp = +prompt("write your frav number");
let check = givInp % 2;

if (check === 0) {
  alert(givInp + " is even number ");
} else if (check === 1) {
  alert(givInp + " is Odd number ");
}

// QUESTION NO 10
let temp = +prompt("Enter your citie's weather");
if (temp > 40) {
  alert("It is too hot outside");
} else if (temp > 30) {
  alert("The weather today is normal");
} else if (temp > 20) {
  alert("Today's Weather is cool");
} else if (temp > 10) {
  alert("OMG! Today's weather is so cool");
} else {
  alert("Soo cool at you side");
}

// QUESTION NO 11
let num1 = +prompt("Enter the first number of your calculation");
let num2 = +prompt("Enter the second number of your calculation");
let opr = prompt("Enter the operation (+, -, *, /, %):");

let results;

if (opr === "+") {
  results = num1 + num2;
} else if (opr === "-") {
  results = num1 - num2;
} else if (opr === "*") {
  results = num1 * num2;
} else if (opr === "/") {
  if (num2 === 0) {
    alert("Error: Cannot divide by zero.");
  } else {
    results = num1 / num2;
  }
} else if (opr === "%") {
  results = num1 % num2;
} else {
  alert("Invalid operator entered.");
}

if (results !== undefined) {
  alert("The result is: " + results);
}
