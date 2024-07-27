//Question 42
// Great Magicians: Start with a copy of your program from Exercise 39
// . Write a function called make_great() that modifies the array of
// magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.
let magician: string[] = ["Simo Aalto", "David Abbot", "Al Baker", "Chris"];
function show_magicians(magician: string[]) {
  magician.forEach((magicians) => {
    console.log(magicians);
  });
}
show_magicians(magician);

function make_great(magician: string[]) {
  for (let i = 0; i < magician.length; i++) {
    magician[i] = magician[i] + "The amazing";
  }
}
make_great(magician);
show_magicians(magician);
