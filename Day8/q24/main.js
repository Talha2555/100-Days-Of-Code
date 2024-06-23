//define variables
var apple = "apple";
var upperCaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
//Test for equality and unequality witj strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("IS apple is not equal to apple?");
console.log(apple != "apple");
//test using lower case function
console.log("Is APPLE  is equal to apple after converting to lower case");
console.log(upperCaseApple.toLowerCase() == apple);
console.log("Is APPLE  is not equal to apple after converting to lower case");
console.log(upperCaseApple.toLowerCase() != "apple");
//Numerical tests
//equal to
console.log("is ten is equal to twenty?");
console.log(ten == twenty);
//not equal to
console.log("is ten isnot equal to twenty?");
console.log(ten != twenty);
// greater than
console.log("is ten is greater than twenty?");
console.log(ten > twenty);
//less than
console.log("is ten is less than twenty?");
console.log(ten < twenty);
//greater than or equal to
console.log("is ten is greater than or equal to twenty?");
console.log(ten >= twenty);
//less than or equal tol
console.log("is ten is less than or equal to twenty?");
console.log(ten <= twenty);
//End and Or operator 
console.log("is ten is equal to 10 & twenty is equal to 20");
console.log(ten == 10 && twenty == 20);
console.log("is ten is equal to 10 or twenty equal to 20");
console.log(ten == 10 || twenty == 20);
//test whether  an item is include in array
console.log("IS orange include in my Fruits array");
console.log(fruits.includes("orange"));
console.log("IS orange is not include in my Fruits array");
console.log(!fruits.includes("orange"));
