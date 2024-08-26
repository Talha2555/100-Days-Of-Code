                         // Question 104
/* Create a function that generates a random hexadecimal color code.*/
function getHexadecimalColor(){
    //creates a random integer Part between 0 to 256
    const randomColorPart =()=>Math.floor(Math.random()*256)
//Convert the integer to a hexadecimal string and pad with 0 if neccessory
const toHex = (num)=>num.toString(16).padStart(2,'0')

//Generate the random RGB components and convert to hex
const red =toHex(randomColorPart())
const green= toHex(randomColorPart())
const blue = toHex(randomColorPart())

//concatenate all the colors to get full Hex Color
return `#${red}${green}${blue}`
}
//Example usage
console.log(getHexadecimalColor());
