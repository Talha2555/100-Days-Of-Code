//Question 44
//Sandwiches: Write a function that accepts a array of items
//  a person wants on a sandwich. The function should have 
// one parameter that collects as many items as the function 
// call provides, and it should print a summary of the sandwich
//  that is being ordered. Call the function three times, using a 
// different number of arguments each time.
function sandWiches(...items: string[]) {
  console.log(`Making a sandWich with the following items: ${items.join(',')}`);

}
//calling the function with differnet orguments
sandWiches("Lattuce", "chicken", "cheese \n")
sandWiches("Tomato", "vegetables", "mayonese\n");
sandWiches("pickle", "chicken", "boiledEggs\n");
