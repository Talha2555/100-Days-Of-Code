//Question 85
/*Finding the Position of a Substring: Write a function that
 locates the first occurrence of the word `code` within any
 given string and returns its position.  */
function findPositionOfCode(str) {
    return str.indexOf("code");
}
var string = "Learn to code and build Awesome Websites.";
var findPosition = findPositionOfCode(string);
console.log(findPosition);
