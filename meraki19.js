function  multiplesOfNumbers(n){
    sum=0
    for(i=0;i<=n;i++){
        if(i%3==0){
            sum+=i          
        }if(i%5==0){
            sum+=i
        }
}
console.log(sum)
}
const input=require("readline-sync")
let m=input.questionInt("enter number:")
multiplesOfNumbers(m)