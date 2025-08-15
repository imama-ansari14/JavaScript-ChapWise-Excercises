//QUESTION NO 1

let age = 20;
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("You can enter.");
    } else {
        console.log("You need an ID.");
    }
} else {
    console.log("You are underage.");
}



let score = 85;
let attendance = 90;

if (score >= 80) {
    if (attendance >= 75) {
        console.log("Grade: A");
    } else {
        console.log("Good marks but low attendance.");
    }
} else {
    console.log("Score below 80.");
}



let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    if (isAdmin) {
        console.log("Welcome Admin!");
    } else {
        console.log("Welcome User!");
    }
} else {
    console.log("Please log in first.");
}




let arr =[ ];
arr[0]= "imama";
arr[2]= "khizra";
arr[4]= "arham ";
arr[10]= " hareem";

console.log(arr);
arr[2]= "               ";
console.log(arr);
