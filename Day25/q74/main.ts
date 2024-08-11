//Question 74
/*Swapping Variables: Demonstrate how to swap the values of two variables.
 Start with variables `a = 5` and `b = 10`, then swap their values so that `a` becomes 
 `10` and `b` becomes `5`.*/

function swapValues() {
  let a = 5; //Initailly a is 5

  let b = 10; //Initially b is 10
  console.log("The value Before Swap: a=", a, "b=", b);

  let temporary = a; //Temporary Stores the value of a

  a = b; //Set's a to b value

  b = temporary; // Sets b to a's original value stored in temporary
  console.log("After swap: a =", a, "b=", b);
}
swapValues();
