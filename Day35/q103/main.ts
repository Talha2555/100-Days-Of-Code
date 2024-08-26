                       //Question 103
/*Write a function that returns a random boolean value,
 true or false. */

 //This function returns a random boolean value
 function getBooleanValue ():boolean{
    return Math.random() > 0.5
    //Returns true if the random number is greater than 0.5
 }
 console.log(getBooleanValue());
 // Output either true or false