// Question 104
/* Create a function that generates a random hexadecimal color code.*/
function getHexadecimalColor() {
    //creates a random integer Part between 0 to 256
    var randomColorPart = function () { return Math.floor(Math.random() * 256); };
    //Convert the integer to a hexadecimal string and pad with 0 if neccessory
    var toHex = function (num) { return num.toString(16).padStart(2, '0'); };
    //Generate the random RGB components and convert to hex
    var red = toHex(randomColorPart());
    var green = toHex(randomColorPart());
    var blue = toHex(randomColorPart());
    //concatenate all the colors to get full Hex Color
    return "#".concat(red).concat(green).concat(blue);
}
//Example usage
console.log(getHexadecimalColor());
