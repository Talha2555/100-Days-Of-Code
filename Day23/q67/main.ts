//Question 67
/* Arithmetic with Mixed Types: Write a function that takes two parameters:
 a number and a string that represents a number (e.g., `5`). Return their sum as a number.  */
  function addStringAndNumber(value1:number,value2:string):number{
    // Converts the string to a number and adds it to the first number
    return value1 + Number(value2)
  }
  //Trying it with 11 and "7"
  let answer = addStringAndNumber(11,"7")//output 15
  //The string 7 is converted into a number thens adds to number 11
  console.log(answer);
  