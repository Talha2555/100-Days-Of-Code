                        //Question 56
//Keep Only Strings: Given a mix of different types
// of items, make a new list that has only the words.
let mixedArray = [
  1,
  "apple",
  "banana",
  true,
  5,
  "watermelon",
  "guava",
  false,
  44,
];

//pick out only the strings
let onlyString = mixedArray.filter((item) => typeof item == "string");

//Show the list of just string
console.log(onlyString);
