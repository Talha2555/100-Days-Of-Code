//Question 44
//Sandwiches: Write a function that accepts a array of items
//  a person wants on a sandwich. The function should have 
// one parameter that collects as many items as the function 
// call provides, and it should print a summary of the sandwich
//  that is being ordered. Call the function three times, using a 
// different number of arguments each time.
function sandWiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandWich with the following items: ".concat(items.join(',')));
}
//calling the function with differnet orguments
sandWiches("Lattuce", "chicken", "cheese \n");
sandWiches("Tomato", "vegetables", "mayonese\n");
sandWiches("pickle", "chicken", "boiledEggs\n");
