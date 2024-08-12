               //Question 77
 /* Default Parameters: Write a function that greets a user. It should take the
  users name as a parameter and say hello. If no name is given, it should
   greet an anonymous user */              
   function greeting(user="MysteryGuest"){
    //Say Hello to the given name or to an anonymous user
    return ` Hello ${user}!`
   }
   //Trying the fucntion with the name
console.log(   greeting("Talha"));
console.log(greeting());

//Trying the function without name