
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
