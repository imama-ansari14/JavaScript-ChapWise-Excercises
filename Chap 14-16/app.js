// QUESTION NO 1
let emtyArr = [];

// QUESTION NO 2
let studentNames = new Array();

// QUESTION NO 3
let stringArr = ["arham", "Hina", "imama", "Khizra"];

// QUESTION NO 4
let numArr = [14, 1, 2007];

// QUESTION NO 5
let booleanArr = [true, false];

// QUESTION NO 6
let mixArr = ["imama", true, 14, "karachi", 6];

// QUESTION NO 7
let eduQual = ["SSC", "HSC", " BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write("<h1>Qualifications:</h1>");
document.write(`<ol>
    <li>SSC</li>
    <li>HSC</li>
    <li>BCS</li>
    <li>BS</li>
    <li>BCOM</li>
    <li>MS</li>
    <li>M.Phil</li>
    <li>PHD</li>
</ol>`);

// QUESTION NO 8
let stdNames = ["Michael", "John", "Tony"];
let stdScore = [320, 230, 480];

for (let index = 0; index < stdNames.length; index++) {
  let name = stdNames[index];
  let score = stdScore[index];
  let percentage = (score / 500) * 100;

  console.log(
    "Score of " +
      name +
      " is " +
      score +
      ". " +
      "Percentage:" +
      percentage +
      "%"
  );
}

// QUESTION NO 9
let colorNames = ["red", "pink", "orange"];
console.log(colorNames);

// a)
let userChoice1 = prompt(
  "What color would you want to add at the beginning of array??"
);
colorNames.unshift(userChoice1);
console.log(colorNames);

// b)
let userChoice2 = prompt(
  "What color would you want to add in the end of array??"
);
colorNames.push(userChoice2);
console.log(colorNames);

// c)
colorNames.push("Grey", "White");
console.log(colorNames);

// d)
colorNames.shift();
console.log(colorNames);

// e)
colorNames.pop();
console.log(colorNames);

// f)
let colorIndex = +prompt(
  "Enter at which position do you want to add color in an array??"
);
let color = prompt("Enter any color name of your choice..");
colorNames.splice(colorIndex, 0, color);
console.log(colorNames);

// g)
let colorIndex1 = +prompt("At which index do you want to delete color??");
let color1 = +prompt("How many colors do you want to delete??");
colorNames.splice(colorIndex1, color1);
console.log(colorNames);

// QUESTION NO 10
let stdScores = [320, 230, 480, 120];
console.log(stdScores);
stdScores.sort();
console.log(stdScores);

// QUESTION NO 11
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshwar"];
let selectedCities = cities.slice(2, 4);
console.log(selectedCities);

// QUESTION NO 12
var arr = ["This", " is ", " my ", " cat "];
console.log(arr);

let methodArr = arr.join("");
console.log(methodArr);

// QUESTION NO 13
// FIFO (First In, First Out) method
let array = [];
array.push("keyboard");
array.push("mouse");
array.push("printer");
array.push("monitor");
console.log(array);

array.shift();
array.shift();
array.shift();
array.shift();
console.log(array);

// QUESTION NO 14
// LIFO (Last In, First Out) method
let devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
console.log(devices);

devices.pop();
devices.pop();
devices.pop();
devices.pop();
console.log(devices);

// QUESTION NO 15
let phManufactureres = [
  "apple",
  "samsung",
  "motorola",
  "nokia",
  "sony",
  "haier",
];
document.write("<select>");
for (let i = 0; i < phManufactureres.length; i++) {
  document.write("<option>" + phManufactureres[i] + "</option>");
}
document.write("</select>");
