//Question 43
/*Unchanged Magicians: Start with your work from Exercise 40.
 Call the function make_great() with a copy of the array of
  magicians’ names. Because the original array will be unchanged,
  return the new array and store it in a separate array. Call show_magicians()
  with each array to show that you have one array of the original names and
  one array with the Great added to each magician’s name.*/
var magician = ["Simo Aalto", "David Abbot", "Al Baker", "Chris"];
function make_great(magician) {
    var greatMagician = [];
    magician.forEach(function (magician) {
        greatMagician.push("".concat(magician, " the great"));
    });
    return greatMagician;
}
function showMagician(magician) {
    magician.forEach(function (magician) {
        console.log(magician);
    });
}
// Creates a new modified array
var greatMagician = make_great(magician.slice());
console.log("Original magicians:");
//Show original Names
showMagician(magician);
console.log("Great magicians:");
//Show modified Names
showMagician(greatMagician);
