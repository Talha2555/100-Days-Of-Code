                    // Question 93
/* Find the index of `Banana` in an array of fruits 
and replace it with `Mango`.*/

//This function finds "Banana" in the fruits array and replace it with "Mango"
function replaceBananaWithMango(fruits: string[]): void {
  const findIndex = fruits.indexOf("Banana");
  if (findIndex !== -1) {
    //check if banana found in array
    // Replace Banana with Mango
    fruits[findIndex] = "Mango";
  }
}
let fruits: string[] = ["Apple", "Banana", "Pineapple", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits); //output :["Apple","Mango",'Pineapple','Cherry']
