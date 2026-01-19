//--------- CHAP NO 35-38----------

// QUESTION NO 1
function date_time() {
    let date = new Date();
    document.write(date + "<br/>");
}
date_time();


// QUESTION NO 2
function greet(firstName, lastName) {
    document.write(`Hello! ${firstName} ${lastName}, Welcome to our website <br/>`);
}

let firstName = prompt("Enter your first name");
let secondName = prompt("Enter your last name");

greet(firstName, secondName);

// QUESTION NO 3
let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
function add() {
    document.write(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
}
add();

// QUESTION NO 4