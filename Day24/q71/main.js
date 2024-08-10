//Question 71
/*Compare `let` and `const`: Create two examples where `let`
 allows reassignment but `const` does not. Try to reassign a `const`-declared
  variable and catch the error.*/
var name1 = "Talha khan";
//Variable using with let can be reassigned
name1 = "Ali Haider";
console.log(name1); //output Ali Haider
//Try to re-Assign a const -Declared variable
var age = 19;
try {
    //   age = 18; //Error
}
catch (error) {
    console.log("Error :Cant re-Assign a Const -Declared variable");
}
console.log(age);
