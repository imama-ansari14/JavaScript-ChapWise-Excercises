// QUESTION NO 1
let matrix = [[], [], []]

// QUESTION NO 2
let mulDimen = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
document.write(mulDimen[0], "<br>")
document.write(mulDimen[1], "<br>")
document.write(mulDimen[2], "<br>")

// QUESTION NO 3
for (let i = 1; i <= 10; i++) {

  document.write(i, "<br>")
}

// QUESTION NO 4
// let input1 = +prompt("Enter table number")
// let input2 = +prompt("Enter lenght of table")
// document.write("Multiplication Table Of " + input1 + "<br>")
// for (let i = 1; i <= input2; i++) {
// document.write(input1 + " × " + i + " = " + input1 * i + "<br>");
// }

// QUESTION NO 5
let fruitsArr = ["apple", "banana", "mango", "orange", "stawbarry"]
document.write("Element at index 0 is " + fruitsArr[0] + "<br>")
document.write("Element at index 1 is " + fruitsArr[1] + "<br>")
document.write("Element at index 2 is " + fruitsArr[2] + "<br>")
document.write("Element at index 3 is " + fruitsArr[3] + "<br>")
document.write("Element at index 4 is " + fruitsArr[4] + "<br>")

document.write(`</br>`)
// QUESTION NO 7
let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// let find = prompt("Welcome to Bakery. What do you want to order sir/mam??").toLowerCase();

let matchFound = false;

for (let i = 0; i < bakery.length; i++) {
  if (bakery[i] === find) {
    document.write(find + " is <strong>available</strong> at index " + i + " in our bakery.");
    matchFound = true;
    break; // Stop the loop after finding the match
  }
}

if (!matchFound) {
  document.write("We are sorry. " + find + " is <strong>not available</strong> in our bakery.");
}

document.write(`</br>`)
// QUESTION NO 8
let largeNum = [24, 53, 78, 91, 12]
let largest = largeNum[0]
console.log(largest);

for (let i = 0; i < largeNum.length; i++) {
  if (largeNum[i] > largest) {
    largest = largeNum[i]
    console.log(largest);
  }
}
document.write(`Array items: ${largeNum} </br>`)
document.write(`The largest number is :${largest} </br>`)




