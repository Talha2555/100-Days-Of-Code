//Question 40
/*💡Question_40: Album: Write a function called make_album()
that builds a Object describing a music album. The function should
 take in an artist name and an album title, and it should return a Object
  containing these two pieces of information. Use the function to make three
   dictionaries representing different albums. Print each return value to show
   that Objects are storing the album information correctly. Add an optional parameter
    to make_album() that allows you to store the number of tracks on an album.
    If the calling line includes a value for the number of tracks, add that value to the
     album’s Object. Make at least one new function call that includes the number of tracks on an album. */
function make_album(artistName, albumTitle, tracks) {
    var album;
    if (tracks) {
        album = {
            name: artistName,
            title: albumTitle,
            track: tracks,
        };
    }
    else {
        album = {
            name: artistName,
            title: albumTitle,
        };
    }
    return album;
}
var album1 = make_album("Farhan Saeed", "Roiyaan");
//with track parameters
var album2 = make_album("Rahat Fatah Ali Khan", "Jag Ghoomeya", 10);
var album3 = make_album("Atif Aslam", "Tajdar-e-Haram");
console.log(album1);
console.log(album2);
console.log(album3);
