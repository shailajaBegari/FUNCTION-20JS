function  license_checker(speed){
    if(speed<=70){
        console.log("ok")}
    if(speed>70){
        points=0
        for(i=70;i<speed;i+=5){
            points+=1}
        if(points>12){
            console.log("License suspended")
        }else{
            console.log(points)
        }
    }
}
const input=require("readline-sync")
let user=input.questionInt("enter the speed:")
license_checker(user) 