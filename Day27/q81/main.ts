                  //Question 81
/* Iterating Over Object Properties: Write a function that takes an object
 as an argument and logs all of its properties and values.*/

//This function shows every detail about an object
function logObjProperties(obj) {
  for (let key in obj) {
    //Loops through each property in the object
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}
let car = {
  make: "Suzuki",
  model: "swift",
  year: 2021,
  color: "blue",
};
logObjProperties(car);
