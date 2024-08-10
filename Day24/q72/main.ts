                                 //Question 72
/* Block Scope with `let` and `const`: Demonstrate block scope by creating a code block with``that uses both `let`and`const`.
 Show how variables declared inside the block are not accessible outside of it. */

//Demonstrating block Scope
{
  let blockLet = "visible inside the block";
  const blockConst = "also only inside the block";
  console.log(blockLet); //works fine
  console.log(blockConst); //works fine
}
try {
  //   console.log(blockLet); //Error
} catch (error) {
  console.log("BlockLet is not accsesible outside the block");
}
try {
  //   console.log(blockConst); //This will also fail
} catch (error) {
  console.log("blockConst is not accessible outside the block");
}
