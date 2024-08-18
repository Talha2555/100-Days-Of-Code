//Question 95
/* Write a function that uses the .filter() method
to return an array of numbers greater than 10.*/
function noGreaterThanTen(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
var numbers = [12, 9, 18, 4, 2, 15, 21, 78, 92];
console.log(noGreaterThanTen(numbers));
