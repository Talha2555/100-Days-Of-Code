                //Question 34
/*Determine if a given year is a leap year using comparison operators. */
function checkLeapYear(year:number):boolean{
//Checks the condition for the leap year
return (year %4 ===0 && year %100!==0) || year %400 ===0
}
console.log(checkLeapYear(2020));//output true
console.log(checkLeapYear(2024));//output true
console.log(checkLeapYear(2023));//output false
