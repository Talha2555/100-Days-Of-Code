                     //Question 109
/* Write an if statement that logs `Good Morning` if the current time is before 12 PM.*/

//Checks the current hour and logs "Good Morning" if its before 12
let currentTime = new Date();
if (currentTime.getHours() < 12) {
  console.log("Good Morning"); //Its morinig if before 12
}
// This simple check helps us greet users appropriately
// based on the time of day.
