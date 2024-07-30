//Question 48
// Arrays of laptop prices as Example
let prices1 = [1200, 1300, 1000];
let prices2 = [1300, 1400, 1200];

//Combining the array using spread operators and sorting the result
let combinePrices = [...prices1, ...prices2].sort((a, b) => a - b);

//log the combine and sorted array
console.log("combine the sorted price:", combinePrices);
