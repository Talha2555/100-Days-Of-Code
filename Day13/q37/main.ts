//Question 37
// Modify the make_shirt() function so that shirts are large by default with a message
// that reads I love TypeScript.

function make_shirt(
  size: string = "large",
  message = "I Love Typescript."
): void {
  console.log(`Make the ${size} shirt with message ${message} `);
}
make_shirt(); //default parameters
make_shirt("medium"); //make a medium shirt with default message
make_shirt("small", "Onwards and Upwards"); //make a shirt of any size with different message
