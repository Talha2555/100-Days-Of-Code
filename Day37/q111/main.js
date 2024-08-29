//Question 111
/* Use an if-else-if chain to categorize a persons age group
 (child, teenager, adult).*/
function age(age) {
    if (age <= 14) {
        return "child";
    }
    else if (age <= 18) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
console.log(age(22));
console.log(age(45));
console.log(age(5));
