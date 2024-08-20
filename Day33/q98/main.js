//Question 98
/* Create a JavaScript snippet that calculates and logs how many
 days are left until New Year.*/
//This calculates how many days are left until new Year
function daysLeftTillNewYear() {
    var currentDate = new Date();
    //1st January of next Year
    var newYear = new Date(currentDate.getFullYear() + 1, 0, 1);
    //Difference in milliseconds
    var difference = newYear.getTime() - currentDate.getTime();
    //Convert milliseconds into days
    var days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysLeftTillNewYear() + "Days are remaining until new year");
