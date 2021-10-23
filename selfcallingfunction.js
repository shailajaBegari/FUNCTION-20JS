//You have to add parentheses around the function to indicate that it is a function expression:

// (function myName () {
//  var x = "Hello!! Nani";  // I will invoke myself
//  console.log(x);
// })();

// self callinf function its indictaes the ()  ///

// (function nani(){
//     var a=100
//     var b=50
//     sum=a+b
//     return sum
// })()
// console.log(sum)

(function(n1,n2){
    console.log(n1==n2)
})(3,4)