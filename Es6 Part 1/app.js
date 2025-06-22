//VARIABLE SCOPING (VAR/LET/CONST)
// QUESTION NO 1
if (1 === 1) {
  var broName = "arham";
  console.log(broName);

  let myname = "imama";
  console.log(myname);
}
console.log(broName);
console.log(myname)  //myname is not defined
// We can access the variable declaring with var outside the block scope but cant access the variable declaring with let 