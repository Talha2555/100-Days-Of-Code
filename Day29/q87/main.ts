                      //Question 87
/* Extracting a Substring: Demonstrate how to extract the first
 10 characters from a string. */

// This function takes out the first 10 characters from any text
function getFirstTenChars(str: string): string {
  return str.substring(0, 10);
  // Gets characters from start to position 10
}
// Example: Taking the first 10 characters of a sentence
console.log(getFirstTenChars("Hello,Typescript ! world"));
