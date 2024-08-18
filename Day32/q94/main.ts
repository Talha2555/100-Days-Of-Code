                            //Question 94
/* Use the .map() method to create a new array that contains the length 
of each word from an array of words.*/

//Defines an array with some words
let languages :string[]=['Typescript','Javascript','Python','C++',"Java"]
// Uses .map() to create a new array with the length of each word
let languageLength = languages.map(language =>language.length)
console.log(languageLength); //output :[ 10, 10, 6, 3, 4 ]
// Each number in the new array represents the 
// length of the corresponding word in the original array.