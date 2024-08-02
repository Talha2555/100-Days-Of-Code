//Question 55
/* Making Flexible Object Keys: Learn how to set up a list 
 where you can change the name of each section based on
what you need at that moment, like adjusting labels
 based on user choices.*/

//A way to make flexible object list:
function makeObjectWithDynamicKey(key: string, value: string) {
  let dynamicObj = {};
  //setting up a section in the list with a changeable name
  dynamicObj[key] = value;
  return dynamicObj;
}

//using the flexibel list setup for a users preference
let userLanguagePrefernence = makeObjectWithDynamicKey("language:", "Python");

//Showing the user choice
console.log(userLanguagePrefernence);
