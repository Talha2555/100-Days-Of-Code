//Question 65
/* Determine the Remainder: Make a function that gets two numbers and shows the
 leftover from dividing them using the `%` sign. For example, `remainder(5, 2)` should give `1`.*/
function getRemainder(num1: number, num2: number): number {
  return num1 % num2;
}
// Trying it with 5 divided by 2
let result = getRemainder(5, 2);
console.log("Remainder of (5,2) is:", result);
// This tells us the leftover, which is 1 here.
