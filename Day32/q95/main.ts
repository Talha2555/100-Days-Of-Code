                        //Question 95
/* Write a function that uses the .filter() method to return an array
 of numbers greater than 10.*/

//The Function filters the number greater than 10 and store them in array
function noGreaterThanTen (numbers:number[]):number[]{
    return numbers.filter((number)=>number >10)
}
//Example :Filtering an array of numbers
let numbers :number[]=[12,9,18,4,2,15,21,78,92]
console.log(noGreaterThanTen(numbers));
//New Array Contains the number Greater than 10