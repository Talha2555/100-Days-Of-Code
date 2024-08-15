                     //Question 85
/*Finding the Position of a Substring: Write a function that
 locates the first occurrence of the word `code` within any 
 given string and returns its position.  */
 
function findPositionOfCode(str: string): number {
  return str.indexOf("code");
}
//Example :Searching within a sentence
let string = "Learn to code and build Awesome Websites.";
let findPosition = findPositionOfCode(string);
console.log(findPosition); //output 9
