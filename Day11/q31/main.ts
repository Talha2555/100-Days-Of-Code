//                  Question 31:
//No Users:Ensure Your user list isn't empty.

//Define an array of usernames

let usernames: string[] = [];
//Check if the array is empty
if (usernames.length === 0) {
  //if the array is empty ,log a message indicating the need for users
  console.log("We need to find some users!");
} else {
  //if the array is not empty ,iterate over each username
  for (let username of usernames) {
    //Check if the current username is "Admin"
    if ((username = "Admin")) {
      // If the username id "admin", log a special greeting
      console.log("Hello admin , would you like to see a status report");
    } else {
      //IF the username is not "admin", log a generic greeting
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}
