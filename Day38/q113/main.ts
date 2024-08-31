                     //Question 113
/*Write a function that checks if a Map contains a key for 
`Canada` and logs the capital if it exists. */
function logCanadaCapital(map: Map<string, string>): void {
    const countryKey = "Canada";
    
    if (map.has(countryKey)) {
      const capital = map.get(countryKey);
      console.log(`The capital of Canada is ${capital}.`);
    } else {
      console.log("Canada is not in the map.");
    }
  }
  
  // Example usage:
  const countryCapitals = new Map<string, string>([
    ["Canada", "Ottawa"],
    ["France", "Paris"],
    
  ]);
  
  logCanadaCapital(countryCapitals);
  