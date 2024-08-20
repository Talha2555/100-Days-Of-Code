"use strict";
//Question 97
/*Write a function that returns the current date in the format `DD-MM-YYYY`. */
Object.defineProperty(exports, "__esModule", { value: true });
// This function formats the current date as DD-MM-YYYY
function getCurrentDate() {
    let now = new Date();
    //Ensure the day is two digit
    const day = String(now.getDay()).padStart(2, "0");
    //Adds 1 because month are 0 indexed
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    return ` ${day}-${month}-${year}`;
}
console.log(getCurrentDate());
// Outputs the current date in DD-MM-YYYY format
