//Question 49
/*Function with Rest Parameters: Write a function
that takes a rest parameter representing multiple hobbies.
 It should log each hobby with a statement saying you enjoy that hobby*/
function myHobbies() {
    var hobby = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobby[_i] = arguments[_i];
    }
    hobby.forEach(function (DailyTask) {
        console.log("I like ".concat(DailyTask, " and I really enjoy it!"));
    });
}
console.log(myHobbies("Playing Cricket", "Coding", "Singing song", 'Reading Historical Books'));
