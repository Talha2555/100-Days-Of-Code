                           //Question 86
/* Checking for Text Presence: Create a function that checks
 if the word `JavaScript` is present in a given string. It should 
 return `true` if found, otherwise `false`.*/
function checkText(text: string): boolean {
  return text.includes("JavaScript");
}
//Example: Seeing if a text mentions Javascript
console.log(checkText("My Favourite Programming Language is JavaScript"));
// It simply says true if "JavaScript" is there, or false if it's not
