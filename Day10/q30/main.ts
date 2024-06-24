let userName :string[]=["Sana","usman","ali","Admin","talha"]
userName.forEach( oneuser=>{
if(oneuser ==="Admin"){
    console.log(`Hello ${oneuser} would you like to see a status report?`);
    
}
else {
    console.log(`Hello ${oneuser} Thank you ! for logging in again?`);
    
}
})