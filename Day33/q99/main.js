//Question 99
/* Generate a date object representing your next birthday and log
it to the console.*/
// Generates a Date object for the next occurrence of a specific
function getTheNextBirthday(month, day) {
    var date = new Date();
    var year = date.getFullYear();
    //months are  0-indexed
    var birthday = new Date(year, month - 1, day);
    if (birthday < date) {
        //If the birthday of person has passed this year ,Use the Next Year
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
//place Your Birthday Month and Day
var nextBirthday = getTheNextBirthday(5, 31);
console.log("My NextBirthDay Month and Date is:", nextBirthday);
//
