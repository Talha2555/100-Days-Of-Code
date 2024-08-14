//Question 84
/* Replacing Text in a String: Write a function that takes a sentence and
 replaces all instances of the word `JavaScript` with `TypeScript`.*/
//This function swap Javascript and Typescript
function replaceStr(sentence) {
    return sentence.replace(/Javascript/g, "Typescript");
    // Uses a regular expression with the 'g' flag for a global replacement
}
//Example :Changing the name of Programming Language
console.log(replaceStr("My Favourite Programming Language is Javascript"));
//output : My Favourite Programming Language is Typescript
