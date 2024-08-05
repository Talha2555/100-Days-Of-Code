/*  Question 59
Add a Special Number: Make a program that creates custom adders.
 These adders can add a specific number to any other number you give them later.*/

//This program makes a funtion that adds a specific number
function makeAdder(valueToAdd: number): (number) => number {
  //This function takes a number and adds your special number to it
  return function (number: number): number {
    return valueToAdd + number;
  };
}
// Making a magic box that adds 5
let addValue5 = makeAdder(6);
console.log(addValue5(10)); //if i put 10 in box ,it will give us 16
//beacause we made a function that adds 6 to any number
