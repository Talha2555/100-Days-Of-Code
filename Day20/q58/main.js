//Question 58
//Write a simple program that can take lots of scores
//  and find theif average.
function findAverage() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    //Adds all scores togarher and divides by the number of length
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0) / scores.length;
    return total;
}
//Example: finding the average of 6 scores
console.log(findAverage(91, 93, 87, 78, 66, 45, 90));
