//         Question 33
//Store the number 1 to 9 in an array
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//loops for the array
numbers.forEach((checkNo) => {
  let suffix = "th";
  if (checkNo === 1) {
    suffix = "st";
  } else if (checkNo === 2) {
    suffix = "nd";
  } else if (checkNo === 3) {
    suffix = "rd";
  }
  console.log(`${checkNo}${suffix}`);
});
