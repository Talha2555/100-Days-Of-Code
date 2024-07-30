//Question 47
//Array Destructuring: Given an array of objects representing 
// different laptops, each with properties make, model, and year, 
// use array destructuring to assign the first and second laptops
//  to variables. Then, log these variables.
var laptops = [
    { make: "Dell", model: "XPS", year: 2022 },
    { make: "HP", model: "EliteBook", year: 2023 },
    { make: "HP", model: "NoteBook", year: 2022 },
];
//Destructure the first and Second laptop
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log("laptop1:", laptop1, laptop2);
