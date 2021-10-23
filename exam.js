
function ShowMessage(firstName, lastName) {
    console.log( firstName + " " + lastName);
}

ShowMessage("Steve", "Jobs", "Mr.");  
ShowMessage(); 

//if u pass less arguments then rest of the parameters will be undefined. 
// if you pass more arguments then additional arguments will be ignored.