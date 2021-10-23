//calling one function to another function//

// function my(a){
//     var res=a+2
//     return res
// }
// function my1(b){
//     var res=my(4)*5
//     return res
// }
// console.log(my1(5))


//////////////////////
//how to calling in variable storing storing//


// function add(a,b){
//     c=a+b
//     return c
// }
// var d=add(2,3)
// console.log(d)
// function sub(c,d){
//     e=c-d
//     return e
// }
// var f=sub(4,5)
// console.log(f)


////////////how to call main function//
function f1(a,b){
    res=a+b
    console.log(res)
}
function f2(c,d){
    res=c*d
    console.log(res)
}
function main(){
    f1(2,3)
    f2(4,5)
}
main()












