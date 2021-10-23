function  isGreaterThen20(num){
    if(num>20){
        return true

    }
}
function student(markslist){ 
    count=0
    for(var i of markslist){
            result=isGreaterThen20(i)
            console.log(result)
            if(result==true){
                count++
            }

        }
console.log(count)
}
student([23,45,17,48,9])