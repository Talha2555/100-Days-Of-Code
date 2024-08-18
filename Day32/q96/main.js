//Question 96
/*Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array. */
function sumTwoNumbers(numbers) {
    return numbers.reduce(function (accumulator, currentVal) { return accumulator + currentVal; }, 0);
}
var numbers = [10, 29, 20, 30, 47, 50];
console.log(sumTwoNumbers(numbers));
