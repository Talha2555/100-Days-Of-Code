                       //Question 110
/*Create a function that assigns a grade (A, B, C, D, F) based
 on a students score */
function assignGrades(score: number) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score >= 50) {
    return "E";
  } else if (score >= 40) {
    return "F";
  }
}
console.log(assignGrades(87));
console.log(assignGrades(76));
console.log(assignGrades(56));
