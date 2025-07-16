//ENHANCED OBJECT LITERALS
// QUESTION NO 1
// You have these variables:
// let course = "JavaScript";
// let duration = "6 weeks";
// let fee = 5000;
// Task: Create an object named bootcamp using shorthand property names.
let course = "JavaScript";
let duration = "6 weeks";
let fee = 5000;
let bootCamp = {
  course,
  duration,
  fee,
};
console.log(bootCamp);

// QUESTION NO 2
//Create an object student with the following:
// name: "Ali"
// marks: 85
// A method showResult that logs: "Ali scored 85 marks."  Use enhanced object literal to define the method.
let student = {
  name: "Ali",
  marks: 85,
  showResult() {
    console.log(`${this.name} scored ${this.marks} marks.`);
  },
};
student.showResult();

// QUESTION NO 3
// let skill = "framework";
// Create an object developer with, a property name set to "Imama"a computed property using the value of skill, set to "React"Then log developer.framework.
let skill = "framework";
let developer={
    propName:"Imama"
    
}

