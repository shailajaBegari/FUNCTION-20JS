function  average(n1,n2,n3){
    var sum=n1+n2+n3
    console.log("avgage",sum/3)
}
const n=require("readline-sync")
let m=n.questionInt("enter numner:")
let s=n.questionInt("enter numner:")
let p=n.questionInt("enter numner:")
average(m,s,p)

//**************************************** */

// function average(num1,num2,num3){
//     console.log("sum of three numbers -",num1+num2+num3);
//     console.log("Average of three numbers -",(num1+num2+num3)/3);
//     }
    
//     const input = require('readline-sync');
//     let number1 = input.questionInt('Enter the number1 :- ');
//     let number2 = input.questionInt('Enter the number2 :- ');
//     let number3 = input.questionInt('Enter the number3 :- ');
//     average(number1,number2,number3);