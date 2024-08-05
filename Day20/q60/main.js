//Question60
/*Self-Running User Profile: Create a quick, self-setup profile
for a user that can tell you the users name and age. */
//  This profile sets itself up and can share info about the user
var userProfile = (function () {
    //the user details should be kept inside variable
    var name = "Talha khan";
    var age = 19;
    //this part shares the user details
    return {
        displayInfo: function () {
            console.log("Name : ".concat(name, ",\nAge : ").concat(age));
        },
    };
})();
//Asking the profile to tell about user details
userProfile.displayInfo(); //Username and Age
