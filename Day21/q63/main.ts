//Question 63
/* Shape Shifter: Write a program that can describe either 
a circle or a rectangle using a special type alias, including
 properties unique to each shape.*/
type Shape = {
  kindOfShape: "Circle" | "Rectangle";
  radius?: number; //Only for circle
  width?: number; // Only for rectangle
  height?: number; //Only for rectangle
};
//Lets Describe a circle using our Shape type
let circle: Shape = {
  kindOfShape: "Circle",
  radius: 4, //4meter
};
//lets Describe a Rectangle using our Shape type
let rectangle: Shape = {
  kindOfShape: "Rectangle",
  width: 7, //7meter
  height: 4, //4meter
};
//Lets show what we described
console.log("Circle:", circle);
console.log("Rectangle:", rectangle);
