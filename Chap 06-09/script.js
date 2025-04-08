// QUESTION NO 1
let a =10

document.write("<p>Result:</p>")
document.write("<p>The value of a is:"+ a + "</p> <hr>")
// preInc
document.write("<p>The value of ++a is:"+  ++a + "</p> ")
document.write("<p>Now the value of a is:"+ a + "</p> <br>")
// postInc
document.write("<p>The value of a++ is:"+  a++ + "</p> ")
document.write("<p>Now the value of a is:"+ a + "</p> <br>")
// preDec
document.write("<p>The value of --a is:"+  --a + "</p> ")
document.write("<p>Now the value of a is:"+ a + "</p> <br>")
// postDec
document.write("<p>The value of a-- is:"+  a-- + "</p> ")
document.write("<p>Now the value of a is:"+ a + "</p> <br>")

// QUESTION NO 2
var a1 =2
var b =1
var result= --a1 - --b + ++b + b--

document.write("a is "+a1 +"<br>")
document.write("b is "+b+"<br>")
document.write("Result is "+result)

// QUESTION NO 3
let userInp= prompt('Enter your name')
alert("Hello, "+ userInp +"!");

// QUESTION NO 5
let num = prompt("Enter your frav number for multiplication table:");
if (num) {
  for (let i = 1; i < 11; i++) {
    document.write(num + "X" + i + "=" + num * i + "<br>");
  }
} else {
  for (let i = 1;i<=10 ; i++) {
    document.write(5 + "X" + i + "=" + 5 * i + "<br>");
  }
}

// QUESTION NO 6
let SubOne = prompt("which subjects are  you studying?");
let obtOne = +prompt("Enter obtained marks for " + SubOne);
let SubTwo = prompt("Tell me your another subject");
let obtTwo = +prompt("Enter obtained marks for " + SubTwo);
let SubThree = prompt("Tell me your another subject");
let obtThree = +prompt("Enter obtained marks for " + SubThree);

// TOTAL OBTAINED MARKS
let tObt = obtOne + obtTwo + obtThree;
// TOTAL MARKS PER SUBJECT
let tMarks = 100;
// TOTAL MARKS ALL SUBJECT
let totalMarks = tMarks * 3;
// TOTAL PERCENTAGE OF ALL SUBJECTS
let overallPer = (tObt / totalMarks) * 100;

document.write(
  "<table border='1' cellspacing='0' cellpadding='10'><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>"
);
document.write(
  "<tr><td>" +
    SubOne +
    "</td> <td>" +
    tMarks +
    "</td><td>" +
    obtOne +
    "</td><td>" +
    obtOne +
    " %</td></tr>"
);

document.write(
  "<tr><td>" +
    SubTwo +
    "</td> <td>" +
    tMarks +
    "</td><td>" +
    obtTwo +
    "</td><td>" +
    obtTwo +
    " %</td></tr>"
);

document.write(
  "<tr><td>" +
    SubThree +
    "</td> <td>" +
    tMarks +
    "</td><td>" +
    obtThree +
    "</td><td>" +
    obtThree +
    " %</td></tr>"
);
document.write(
  "<tr><th>Total</th><th>" +
    totalMarks +
    "</th><th>" +
    tObt +
    "</th><th>" +
    overallPer +
    "%</th></table>"
);