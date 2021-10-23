function  perfect(n){
    sum=0
    for(i=0;i<n;i++){
        if(n%i==0){
            sum=sum+i
        }
    }
    if(sum==n){
        console.log("perfect number",n)
    }else{
        console.log("not a perfect number",n)
    }
}
var s=require("readline-sync")
var m=s.question("enter number:")
perfect(m)