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
let input1 = +prompt("Enter table number")
let input2 = +prompt("Enter lenght of table")
document.write("Multiplication Table Of " + input1 + "<br>")
for (let i = 1; i <= input2; i++) {
document.write(input1 + " × " + i + " = " + input1 * i + "<br>");
}

// QUESTION NO 5
let fruitsArr = ["apple", "banana", "mango", "orange", "stawbarry"]
document.write("Element at index 0 is "+ fruitsArr[0] + "<br>")
document.write("Element at index 1 is " + fruitsArr[1] + "<br>")
document.write("Element at index 2 is " + fruitsArr[2] + "<br>")
document.write("Element at index 3 is " + fruitsArr[3] + "<br>")
document.write("Element at index 4 is " + fruitsArr[4] + "<br>")
