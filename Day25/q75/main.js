//Question 75
/* Compound Assignment Operators: Use compound assignment operators to simplify
 arithmetic operations. Start with `x = 4` and perform a series of operations (addition,
 subtraction, multiplication, division) on `x` using compound operators. */
function useCompoundOperators() {
    var x = 4;
    console.log("Initial value of X:", x);
    x += 2; //add 2 into x
    console.log("After Addition:", x);
    x -= 2; //Sub 2 from x
    console.log("After Subtraction:", x);
    x *= 2; //Multiply 2 into x
    console.log("After Multiplication:", x);
    x /= 2; //Divide 2 from x
    console.log("After Division:", x);
}
useCompoundOperators();
