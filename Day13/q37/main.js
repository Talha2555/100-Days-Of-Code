//Question 37
// Modify the make_shirt() function so that shirts are large by default with a message
// that reads I love TypeScript.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love Typescript."; }
    console.log("Make the ".concat(size, " shirt with message ").concat(message, " "));
}
make_shirt(); //default parameters
make_shirt("medium"); //make a medium shirt with default message
make_shirt("small", "Onwards and Upwards"); //make a shirt of any size with different message
