            //Question 70
/* Understanding let in Loops: Write a function that uses a loop 
with the let keyword to print numbers from 1 to 5. Explain how
 the let keyword affects the visibility of the loop variable. */
function printNumbers(){
    for(let i=1;i<=5;i++){
        console.log(i);
        
    }
//we cannot acssess i here because i is declared with let 
// and let is blocked Scope
    
}
printNumbers()