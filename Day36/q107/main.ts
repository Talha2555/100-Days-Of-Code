                  //Question 107
/* Write a condition using logical operators that checks if a number
 is divisible by both 2 and 3.*/
function checkDivisibleBy2and3(num: number): boolean {
  return num % 2 === 0 && num % 3 === 0;
}
console.log(checkDivisibleBy2and3(43));
console.log(checkDivisibleBy2and3(20));
console.log(checkDivisibleBy2and3(12));
