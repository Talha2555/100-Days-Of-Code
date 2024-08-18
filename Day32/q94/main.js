//Question 94
/* Use the .map() method to create a new array that contains the length of each word from an array of words.*/
var languages = ['Typescript', 'Javascript', 'Python', 'C++', "Java"];
var languageLength = languages.map(function (language) { return language.length; });
console.log(languageLength);
