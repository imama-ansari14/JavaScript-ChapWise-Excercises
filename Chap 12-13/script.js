// QUESTION NO 2
let input1 = +prompt("Enter the first number of your choice");
let input2 = +prompt("Enter the second number of your choice");

if (input1 > input2) {
  document.write("input 1 is big");
} else if (input2 > input1) {
  document.write("input 2 is big");
} else if (input1 === input2) {
  document.write("both are same");
}

// QUESTION NO 3
let inpNum = +prompt("Enter any number of your choice");
if (inpNum > 0) {
  document.write("The number is Positive");
} else if (inpNum < 0) {
  document.write("The number is Negative");
} else {
  document.write("The number is Zero");
}

// QUESTION NO 4
let inpCharac = prompt("Enter any alphabet of your choice (One Letter)");
if (
  inpCharac === "a" ||
  inpCharac === "e" ||
  inpCharac === "i" ||
  inpCharac === "o" ||
  inpCharac === "u"
) {
  document.write("The alphabet is vowel");
} else {
  document.write("The alphabet is consonant");
}

// QUESTION NO 5
let correctPass = "imama123";
let passInp = prompt("enter you password");
if (passInp === "") {
  document.write("Pleasee! Enter Your Password");
} else if (passInp === correctPass) {
  document.write(
    "Correct! The password you entered matches the original password."
  );
} else {
  document.write("Incorrect Password!");
}

// QUESTION NO 6
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good Day";
} else {
  greeting = "Good Evening";
}

// OUTPUT : This statement does not work because there was a mistake in {} brackets

// QUESTION NO 7
let inpTime = +prompt("Enter the time in 24-hour clock format");
if (inpTime < 1200) {
  document.write("Good Morning!");
} else if (inpTime < 1700) {
  document.write("Good Afternoon!");
} else if (inpTime < 2100) {
  document.write("Good Evening!");
} else if (inpTime < 2359) {
  document.write("Good Night!");
} else {
  document.write("Invalid time!");
}
