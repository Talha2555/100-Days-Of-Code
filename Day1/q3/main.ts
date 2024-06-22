//question3:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person: string = "Talha khan Durrani";
//upperCase
console.log(person.toUpperCase());
//lowerCase
console.log(person.toLowerCase());
//titleCase
let words: string[] = person.split(" ");
let titleCaseName: string = "";
for (let i = 0; i < words.length; i++) {
  titleCaseName +=
    words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titleCaseName);