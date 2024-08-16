                  //Question 90
/*Generating Random Numbers: Write a function that generates a
random number between 1 and 10, inclusive. */                

// This function creates a random number between 1 and 10
function generateRandomNumber():number{
    return Math.floor(Math.random() * 10) +1
}
//Example : Shows a random number between 0 and 10
console.log(generateRandomNumber());
//Each time you call this , you might get a differnet number,
