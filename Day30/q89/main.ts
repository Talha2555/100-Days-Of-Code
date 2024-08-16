                      //Question 89
/* Rounding Numbers: Create a function that takes a number with 
decimals (e.g., `3.14159`) and rounds it to two decimal places.*/

// This function rounds a number to two decimal places
function roundANumber(num: number): number {
  return Number(num.toFixed(2));
}
let output = roundANumber(3.14159); //output : 3.14
console.log(output);
