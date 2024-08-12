              //Question 78
/* Function Expressions vs. Function Declarations: Compare function
 expressions and declarations by creating one of each that performs
  the same task, such as squaring a number. */

//Function Decleration
function squareTheNumber(num: number): number {
  return num * num;
}

//Function Expression

let Greeting = function (num: number): number {
  return num * num;
};

// Both methods give us the same result, showing two
// different ways to create functions that do the same thing.

console.log(squareTheNumber(5)); //output 25
console.log(Greeting(5)); //output 25
