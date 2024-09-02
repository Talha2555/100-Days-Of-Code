//Question 116
/* Create a switch case that matches several cases to the
same code block, representing seasons.*/
function logTheSeasons(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "Winter";
        case 3:
        case 4:
        case 5:
            return "Spring";
        case 6:
        case 7:
        case 8:
            return "Summer";
        case 9:
        case 10:
        case 11:
            return "Autumn";
        default:
            throw new Error("Invalid Month");
    }
}
console.log(logTheSeasons(1)); //output Winter
console.log(logTheSeasons(5)); //output Spring
console.log(logTheSeasons(6)); //output Summer
console.log(logTheSeasons(3)); //output Spring
