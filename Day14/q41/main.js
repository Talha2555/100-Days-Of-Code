//Question 41
// Magicians: Make a array of magician’s names. Pass the array to a function 
// called show_magicians(), which prints the name of each magician in the array.
var magician = ['Simo Aalto', 'David Abbot', 'Al Baker', 'Chris'];
function show_magicians(magician) {
    magician.forEach(function (magicians) {
        console.log(magicians);
    });
}
show_magicians(magician);
