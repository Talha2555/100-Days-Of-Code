//            Question 32
//Check username : Ensure uniqueness in usernames
//Array of current username . 
let current_users = ['Talha khan', "Haider", 'Ali Raza', 'Junaid', 'Fatima'];
//Another list of username .Array of new users to check
let new_users = ["Aresha", "Wajid", 'Dua', 'Haider', 'Junaid'];
//loop through each new user
new_users.forEach(newUser => {
    //if the  new user already exist in the current user array Case Insensitive
    let condition = current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase());
    if (condition) {
        //If the username already exist ,print a message that the person already exist
        console.log(`This ${newUser} already exists.`);
    }
    else {
        console.log(`The ${newUser} is available`);
    }
});
export {};
