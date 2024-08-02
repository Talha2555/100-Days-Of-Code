                      //Question 53
 /*  Pulling Apart a Nested Object: Imagine you have a list inside 
 another list that shows what a computer programmer knows, like coding languages,
  tools, and software frameworks. Find a way to get three specific skills from this
   list and show them.*/

let programmerSkills ={
    languages:["Javascript",'Typescript','Phython',"C++"],
    frameWorks:['NextJs','Angular','ReactJS'],
    tools:['Docker','Git','Npm','Bootstap']
}
// Getting specific skills from the list
let {languages,frameWorks,tools}=programmerSkills

//Showing skills from each catagory
console.log(`Favorite Language : ${languages[2]} \nFavorite FrameWorks : ${frameWorks[1]} \nFavorite Tools : ${tools[0]}`);
