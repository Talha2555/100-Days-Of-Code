//Question 81
/* Iterating Over Object Properties: Write a function that takes an object
 as an argument and logs all of its properties and values.*/
function logObjProperties(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log("".concat(key, ": ").concat(obj[key]));
        }
    }
}
var car = {
    make: "Suzuki",
    model: "swift",
    year: 2021,
    color: 'blue'
};
logObjProperties(car);
