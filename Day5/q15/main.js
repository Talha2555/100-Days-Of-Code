//question15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestList = ["Areesha", "Sana", "wajid", "salman", "haider"];
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, " you are invited on dinner on sunday night\nThank you!"));
});
var notCome = guestList[0];
console.log(guestList[0], "nhi asakhti!");
guestList.splice(0, 1, "Dua");
guestList.forEach(function (guestt) {
    console.log(" Respected ".concat(guestt, " you are invited on dinner tomorrow!"));
});
