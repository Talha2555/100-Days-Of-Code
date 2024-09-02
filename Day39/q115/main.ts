                 //Question 115
/* Use a switch statement to log the days of the week based on a number (1-7).*/
function logDaysOfWeek(dayNo: number): void {
  switch (dayNo) {
    case 1:
      console.log("sunday");
      break;
    case 2:
      console.log("monday");
      break;
    case 3:
      console.log("tuesday");
      break;
    case 4:
      console.log("wednesday");
      break;
    case 5:
      console.log("thursday");
      break;
    case 6:
      console.log("friday");
      break;
    case 7:
      console.log("saturday");
      break;
    default:
      console.log("Invalid day number");
      break
  }
}
logDaysOfWeek(4)//output :Wednesday
logDaysOfWeek(3)//output :tuesday
logDaysOfWeek(2);//output :saturday
logDaysOfWeek(0);//output :Invalid day number
// Uses a switch statement to select the appropriate day based
// on the provided number.
