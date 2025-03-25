// QUESTION NO 1
let num1 = +prompt("Enter your any frav number");
let num2 = +prompt("Enter your another frav number");

let result = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + result);

// QUESTION NO 2
let sub = num1 - num2;
let mul = num1 * num2;
let divide = num1 / num2;
let mod = num1 % num2;

document.write("Addition:" + sub + "<br>");
document.write("Multiplication:" + mul + "<br>");
document.write("Division:" + divide + "<br>");
document.write("Modulus:" + mod + "<br>");

// QUESTION NO 3
let variable;
document.write("Value after variable declaration is " + variable + "<br>");

variable = 5;
document.write("Initial Value: " + 5 + "<br>");

let inc = ++variable;
document.write("Value after increment is: " + inc + "<br>");

variable2 = variable + 7;
document.write("Value after addition is: " + variable2 + "<br>");

let dec = --variable2;
document.write("Value after decrement is:" + dec + "<br>");

let div = dec % 3;
document.write("The remainder is " + div);

// QUESTION NO 4
let ticketPr = 600;
let fiveTicket = ticketPr * 5;

document.write(
  "Total cost to buy 5 tickets to a movie is " + fiveTicket + "PKR"
);

// QUESTION NO 6
let celcius = 25;
let fahrenheit = (celcius * 9) / 5 + 32;
document.write(celcius + "°C is " + fahrenheit + "°F <br>");

let fahrenheit2 = 70;
let celcius2 = ((fahrenheit2 - 32) * 5) / 9;
document.write(fahrenheit2 + "°F is " + celcius2 + "°C");

// QUESTION NO 7
let itemOneP = 650;
let itemTwoP = 100;
let itemOneQ = 3;
let itemTwoQ = 7;
let shippingCharges = 100;
let totalCost = itemOneP * itemOneQ + itemTwoP * itemTwoQ + shippingCharges;

document.write(
  "<h1>Shopping Cart</h1> <br><p> Price of item 1 is " +
    itemOneP +
    "</p>" +
    "<p>Quantity of item 1 is " +
    itemOneQ +
    "</p>" +
    "Price of item 2 is " +
    itemTwoP +
    "<p>Quantity of item 2 is " +
    itemTwoQ +
    "</p> <br>" +
    "<h3>total cost of your order is " +
    totalCost +
    "</h3>"
);

// QUESTION NO 8
let tMarks = 980;
let mObt = 804;
let percentage = (mObt / tMarks) * 100;

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + tMarks + "<br>");
document.write("Marks obtained: " + mObt + "<br>");
document.write("percentage: " + percentage + "%");

// QUESTION NO 9
let totalAmount = 10 * 104.8 + 25 * 28;

document.write("<h1>Currency in PKR</h1>");
document.write("<p>Total Currency in PKR: " + totalAmount + "</p>");

// QUESTION NO 10
let num = ((4 + 5) * 10) / 2;
document.write(num);

// QUESTION NO 11
let currentYear = 2016;
let birthYear = 1992;
let age = currentYear - birthYear;

document.write("<h1>Age Calculator</h1>");
document.write("<p>Current Year:" + currentYear + "</p>");
document.write("<p>Birth Year:" + birthYear + "</p>");
document.write("<p>Your Age:" + age + "</p>");

// QUESTION NO 12
let radius = 20;
let circumference = 2 * 3.142 * 20;
let area = 3.142 * 400;

document.write("<h1>The Geometrizer</h1>");
document.write("<p>Radius of a circle:" + radius + "</p>");
document.write("<p>The circumference is:" + circumference + "</p>");
document.write("<p>The area is :" + area + "</p>");

// QUESTION NO 13
let fravsnack = "chocolate chip";
let currentage = 15;
let maxAge = 65;
let snackAmount = 3;
let total = (maxAge - currentage) * snackAmount;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<p>Favourite Snack: " + fravsnack + "</p>");
document.write("<p>Current Age: " + currentage + "</p>");
document.write("<p>Estimated Maximum Age: " + maxAge + "</p>");
document.write("<p>Amount of snack per day: " + snackAmount + "</p>");
document.write(
  "<p>You will need  " +
    total +
    fravsnack +
    " to last you until the ripe old age of " +
    maxAge +
    "</p>"
);
