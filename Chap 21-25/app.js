//QUESTION NO 1
// let firstName= prompt("Enter your first name")
// let lastName= prompt("Enter your last name")
// let fullName= `${firstName} ${lastName}`
// alert(`Helloo! ${fullName}`)

//QUESTION NO 2
// let mobPhone= prompt("Enter your frav Mobile Phone Model")
// let length=mobPhone.length
// document.write(`My Favorite phone is: ${mobPhone}</br>`)
// document.write(`Length of string: ${length}</br>`)

//QUESTION NO 3
let nation = "Pakistani"
let index = nation.indexOf("n")
document.write(`String: ${nation}</br>`)
document.write(`Index of 'n': ${index}</br></br>`)

//QUESTION NO 4
let greet = "Hello World"
let lastIndex = greet.lastIndexOf("l")
document.write(`String: ${greet}</br>`)
document.write(`Last Index of 'l': ${lastIndex}</br></br>`)

//QUESTION NO 5
let nationality = "Pakistani"
let find = nationality.charAt(3)
document.write(`String: ${nationality}</br>`)
document.write(`Character at index 3: ${find}</br></br>`)

//QUESTION NO 6
// let firstName= prompt("Enter your first name")
// let lastName= prompt("Enter your last name")
// let fullName= firstName.concat(" "+ lastName)
// document.write(`${fullName}</br></br>`)


//QUESTION NO 7
let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");
document.write(`City: ${city}</br>`)
document.write(`After replacement: ${newCity}</br></br>`)

//QUESTION NO 8
var message = "Ali and sami are best friends. They play cricket and football together."
let newMess = message.replaceAll("and", "&")
document.write(`Message: ${message}</br>`)
document.write(`After replacement: ${newMess}</br></br>`)

//QUESTION NO 9
let value = "472"
let numb = Number(value)
document.write(`Value: ${value}</br>`)
document.write(`Type: ${typeof (value)}</br>`)
document.write(`Value: ${numb}</br>`)
document.write(`Type: ${typeof (numb)}</br></br>`)

//QUESTION NO 10
// let userInp = prompt("Enter Anything!!");
// let upperCase = userInp.toUpperCase()
// document.write(`User input:${userInp} </br>`)
// document.write(`Upper case:${upperCase} </br></br>`)

//QUESTION NO 11
// let userInp1 = prompt("Enter anything!!");
// let words = userInp1.split(" ");
// for (let i = 0; i < words.length; i++) {
    // let firstChar = words[i].charAt(0).toUpperCase();
    // let restChars = words[i].slice(1).toLowerCase();
    // words[i] = firstChar + restChars;
// }
// let titleCase = words.join(" ");
// document.write(`User input: ${userInp1} </br>`);
// document.write(`Title case: ${titleCase} </br></br>`);

//QUESTION NO 12
var num = 35.36;

//QUESTION NO 18
let text= "the quick brown fox jumps over the lazy dog"
let search = text.matchAll("the") 
console.log(search);







