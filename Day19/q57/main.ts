// Question 57
/* Find the Average Grade: Given a list of grades, calculate 
the average grade*/
let grades: number[] = [72, 79, 81, 82, 88, 93, 86, 60];
//Find the Averoge grades
// First, we add up all the grades. Then, we divide by how
// many grades there are to get the average.
let avgGrades =
  grades.reduce((total, grade) => total + grade, 0) / grades.length;

//log the average grades
console.log("The Average Grade and number is :", avgGrades);
