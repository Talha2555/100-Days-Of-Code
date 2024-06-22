//question12;Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["Aresha", "sana", "taha", "ahmed", "raza"];
names.forEach(function (friends) {
    console.log("Dear ".concat(friends, " how are you!"));
});
