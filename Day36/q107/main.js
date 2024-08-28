//Question 107
/* Write a condition using logical operators that checks if a number
 is divisible by both 2 and 3.*/
function checkDivisible2and3(num) {
    return num % 2 === 0 && num % 3 === 0;
}
console.log(checkDivisible2and3(43));
console.log(checkDivisible2and3(20));
console.log(checkDivisible2and3(12));
