//Question 92
/* Write a function to remove the last element from an array
 and return the removed element.*/
// This function removes the last element from an array and retu
function removeLastfruit(arr) {
    return arr.pop(); //Remove and return the last element of the array
}
//Example :Removing the last fruit from the array
var fruits = ["apple", "banana", 'pineapple', 'mango'];
console.log(removeLastfruit(fruits)); //Output : mango
//After removing the last Fruit the updated list is :
console.log(fruits);
