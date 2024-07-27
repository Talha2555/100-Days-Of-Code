//Question 41
// Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
let magician: string[] = ["Simo Aalto", "David Abbot", "Al Baker", "Chris"];
function show_magicians(magician: string[]) {
  magician.forEach((magicians) => {
    console.log(magicians);
  });
}
show_magicians(magician);
