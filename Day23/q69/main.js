//Question 69
/* Dividing and Finding the Remainder: Write a function that divides two numbers and
returns both the quotient and the remainder. Use an object to return both values.*/
function divideAndFindRemainder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return {
        quotient: quotient,
        remainder: remainder
    };
}
var result = divideAndFindRemainder(10, 3);
console.log(result);
