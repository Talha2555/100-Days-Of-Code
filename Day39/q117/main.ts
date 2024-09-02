                     //Question 117
/*Implement a switch statement that evaluates an expression and uses the
 default case if none of the cases match. */
function checkValue(value:number):void{
switch (value) {
  case 1:
    console.log("Value is 1");
    break;
  case 2:
    console.log("Value is 2");
    break;
  case 3:
    console.log("Value is 3");
    break;
  case 4:
    console.log("Value is 4");
    break;
  default:
    console.log("Value does not match");

    break;
}}
checkValue(2)
checkValue(4)
checkValue(5)
