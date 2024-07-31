                 //Question 49
/*Function with Rest Parameters: Write a function 
that takes a rest parameter representing multiple hobbies.
 It should log each hobby with a statement saying you enjoy that hobby*/
function myHobbies(...hobby: string[]) {
  hobby.forEach((DailyTask) => {
    console.log(`I like ${DailyTask} and I really enjoy it!`);
  });
}
//Calling the function with four Hobbies
console.log(
  myHobbies(
    "Playing Cricket",
    "Coding",
    "Singing song",
    "Reading Historical Books"
  )
);
