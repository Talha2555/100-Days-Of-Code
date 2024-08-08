//Question 66
/* Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say `true` if both are true, using the `&&` operator. For instance, `checkBothTrue(true, false)` should be `false`.*/
function checkBothTrue(value1, value2) {
    //Only says true if both value are true
    return value1 && value2;
}
//Trying it with true and false
console.log(checkBothTrue(true, false)); //output false
//Since 1 value is false the output is false
