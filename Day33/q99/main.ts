                         //Question 99
/* Generate a date object representing your next birthday and log 
it to the console.*/

// Generates a Date object for the next occurrence of a specific
function getTheNextBirthday(month: number, day: number): Date {
  const date = new Date();
  let year = date.getFullYear();
  //months are  0-indexed
  const birthday = new Date(year, month - 1, day);
  if (birthday < date) {
    //If the birthday of person has passed this year ,Use the Next Year
    birthday.setFullYear(year + 1);
  }
  return birthday;
}
//place Your Birthday Month and Day
let nextBirthday = getTheNextBirthday(5, 31);
console.log("My NextBirthDay Month and Date is:", nextBirthday);

