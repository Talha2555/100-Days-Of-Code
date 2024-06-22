//Making a arrays of countries and print ints original order
let countriesToVist:string[] = ["Malaysia","France","Ireland","Russia","UAE","America"]
console.log("countiresToVisit: ",countriesToVist);
//nichey three dots original array ki copy bana lega or sort ka function alphabatical order me arrange krdeta he
console.log("Alphabatical order: " ,[...countriesToVist].sort())
//showing that the array still in its original order
console.log("Still in its original order: ", countriesToVist);
//print the array in reverse order without modifing the actual list
console.log("Reverse order: ",[...countriesToVist].reverse());
// showing that the array still in its original order
console.log("Still in its original order: ", countriesToVist);
//we have changed the original order now
console.log("Original Array Reversed", countriesToVist.reverse());
//print the arrays to show that its back to orignal order
console.log("Back to orignal order: ", countriesToVist.reverse());
//print the arrays to show that its order has been change in alphabatical order
console.log("Sorted in alphabitical order: ",countriesToVist.sort());
//we have changed the original order now
console.log("Original Array Reversed again", countriesToVist.reverse());
