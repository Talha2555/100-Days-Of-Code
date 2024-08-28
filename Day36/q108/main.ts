                       //Question 108
/* Compare two strings to check if they are identical, ignoring
 case sensitivity.*/

 //This function compares two string ignoring case sensitivity
 function compareSringButIgnoreCaseSensitive(str1:string,str2:string
 ){
    //Converts both string to lowerCase before comparision
    return str1.toLowerCase() === str2.toLowerCase()
 }
 console.log(compareSringButIgnoreCaseSensitive("Talha","talha"));
 console.log(compareSringButIgnoreCaseSensitive("Student",'student'));

 
 