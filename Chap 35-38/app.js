//--------- CHAP NO 35-38----------

// QUESTION NO 1
function date_time() {
    let date = new Date();
    document.write(date + "<br/>");
}
date_time();


// QUESTION NO 1
function greet(firstName, lastName) {
    document.write(`Hello! ${firstName} ${lastName}, Welcome to our website`);
}

let firstName = prompt("Enter your first name");
let secondName = prompt("Enter your last name");

greet(firstName, secondName);
