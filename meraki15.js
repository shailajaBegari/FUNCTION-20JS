function eligible_for_vote(age){
    if(age>=18){
        console.log("eligible")
    }else{
        console.log("not eligible")
    }
}
var n=require("readline-sync")
var m=n.question("ernter the age:")
eligible_for_vote(m)