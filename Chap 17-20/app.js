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


