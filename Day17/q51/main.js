//      Question 51
/*Refactoring to Arrow Functions: Take a simple function
that calculates the area of a rectangle and refactor it
into an arrow function.*/
//calculating area through original function
function calculateAreaTriangle(breath, height) {
    return 0.5 * breath * height;
}
//Reafactored into an arrow function
var triangleArea = function (breath, height) { return 0.5 * breath * height; };
//Example usage of the arrow function
console.log("The Area of Triangle is :", triangleArea(6, 4));
