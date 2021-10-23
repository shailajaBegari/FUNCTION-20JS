function showNumbers(n){
    for(i=0;i<n;i++){
        if(i%2==0){
            console.log(i,"even number")
        }else{
            console.log(i,"odd number")
        }
    }
}
var input=require("readline-sync")
let m=input.questionInt("enter how many numbers u want")
showNumbers(m)