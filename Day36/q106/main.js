//Question 34
/*Determine if a given year is a leap year using comparison operators. */
function checkLeapYear(year) {
    //Checks the condition for the leap year
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(checkLeapYear(2020));
console.log(checkLeapYear(2024));
console.log(checkLeapYear(2023));
