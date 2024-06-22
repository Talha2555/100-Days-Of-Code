//question15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
 let guestList:string[]=["Areesha","Sana","wajid","salman","haider"]
 guestList.forEach(guest =>{
     console.log(`Dear ${guest} you are invited on dinner on sunday night\nThank you!`);
    
 }) 
let notCome=guestList[0]
 console.log(guestList[0] ,"nhi asakhti!");
 guestList.splice(0,1,"Dua")
 guestList.forEach(guestt =>{
     console.log(` Respected ${guestt} you are invited on dinner tomorrow!`);
    
 })