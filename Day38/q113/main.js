"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Question 113
/*Write a function that checks if a Map contains a key for
`Canada` and logs the capital if it exists. */
function logCanadaCapital(map) {
    const countryKey = "Canada";
    if (map.has(countryKey)) {
        const capital = map.get(countryKey);
        console.log(`The capital of Canada is ${capital}.`);
    }
    else {
        console.log("Canada is not in the map.");
    }
}
// Example usage:
const countryCapitals = new Map([
    ["Canada", "Ottawa"],
    ["France", "Paris"],
]);
logCanadaCapital(countryCapitals);
