                   //Question 96
/*Demonstrate how to use the .reduce() method to calculate
 the sum of all numbers in an array. */

//The function calculate the sum of all numbers in array
function sumTwoNumbers(numbers: number[]): number {
  return numbers.reduce(
    (accumulator, currentVal) => accumulator + currentVal,
    0
  );
}
let numbers: number[] = [10, 29, 20, 30, 47, 50];
console.log(sumTwoNumbers(numbers));
