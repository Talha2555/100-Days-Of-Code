//Question 62
/* Making a Student Template: Create a blueprint for student 
information, including their name, age, and the classes they are 
taking, and then fill in this blueprint with an example student.*/
interface Student {
    name:string,
    age:number,
    course:string[]
}

let student :Student={
    name:'Talha khan',
    age:19,
    course:["Certified Cloud Applied Generative AI Engineering","BS Fintech"]

}
//Lets show the student Information
console.log(student);

