//creating a guest list array
var guestList = ["hamza", "talha", "sana", "hussain"];
//making a variable for those who cant come
var notCome = guestList[0];
//print the name of guest who cant come
console.log(notCome, "Nhi a sakhta!");
//add and remove values from guestlist array
guestList.splice(0, 1, "hafsa");
//printing a message for bigger table
console.log("Good News ! We have Found a Bigger Table for Dinner.");
//Adding a new guest at stating index of array
guestList.unshift("Ali");
//Adding a new guest at ending index of array
guestList.push("Zain");
// Get a middele index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
console.log("Dear ".concat(guestList, " you are invited on dinner tommorow"));
//Adding  a new guest  at middle index of array
guestList.splice(middleIndex, 0, "usama");
//print message of updated list
console.log('Updated list of our guests');
//Sending an invitation message to our guest one by one  with their names
guestList.forEach(function (guest) {
    return console.log("Dear ".concat(guest, " would you like to dinner with me?"));
});
