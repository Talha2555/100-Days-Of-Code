//                         Question 83
/*Converting to Upper and Lower Case: Create a function that takes a string,
 converts it to uppercase, then to lowercase, and logs both. */

function strUpperAndLower(str: string) {
  let upperStr = str.toUpperCase();
  let lowerStr = str.toLowerCase();
  console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}
strUpperAndLower("Happy Independence Day");
