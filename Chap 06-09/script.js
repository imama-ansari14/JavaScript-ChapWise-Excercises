// QUESTION NO 1
// let a =10

// document.write("<p>Result:</p>")
// document.write("<p>The value of a is:"+ a + "</p> <hr>")
// // preInc
// document.write("<p>The value of ++a is:"+  ++a + "</p> ")
// document.write("<p>Now the value of a is:"+ a + "</p> <br>")
// // postInc
// document.write("<p>The value of a++ is:"+  a++ + "</p> ")
// document.write("<p>Now the value of a is:"+ a + "</p> <br>")
// // preDec
// document.write("<p>The value of --a is:"+  --a + "</p> ")
// document.write("<p>Now the value of a is:"+ a + "</p> <br>")
// // postDec
// document.write("<p>The value of a-- is:"+  a-- + "</p> ")
// document.write("<p>Now the value of a is:"+ a + "</p> <br>")

// QUESTION NO 2
// var a =2
// var b =1
// var result= --a - --b + ++b + b--

// document.write("a is "+a +"<br>")
// document.write("b is "+b+"<br>")
// document.write("Result is "+result)

// QUESTION NO 3
// let userInp= prompt('Enter your name')
// alert("Hello, "+ userInp +"!");

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
