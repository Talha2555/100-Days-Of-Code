// Question 93
/* Find the index of `Banana` in an array of fruits
and replace it with `Mango`.*/
//This function finds "Banana" in the fruits array and replace it with "Mango"
function replaceBananaWithMango(fruits) {
    var findIndex = fruits.indexOf("Banana");
    if (findIndex !== -1) //check if banana found in array
     {
        // Replace Banana with Mango 
        fruits[findIndex] = "Mango";
    }
}
var fruits = ["Apple", "Banana", 'Pineapple', 'Cherry'];
replaceBananaWithMango(fruits);
console.log(fruits);
