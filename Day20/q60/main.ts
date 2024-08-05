             //Question 60
/*Self-Running User Profile: Create a quick, self-setup profile 
for a user that can tell you the users name and age. */

//  This profile sets itself up and can share info about the user
let userProfile = (function () {
  //the user details should be kept inside variable
  let name = "Talha khan";
  let age = 19;
  //this part shares the user details
  return {
    displayInfo: function () {
      console.log(`Name : ${name},\nAge : ${age}`);
    },
  };
})();
//Asking the profile to tell about user details
userProfile.displayInfo(); //Username and Age
