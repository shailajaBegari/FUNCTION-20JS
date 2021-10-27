
//varables exmpls///
// function varTest() {
//     var x = 5;
//     {
//       var x = 2;  // same variable!
//       console.log(x);  // 2
//     }
//     console.log(x);  // 2
//   }
//   varTest()

// //let exmples//
//   function letTest() {
//     let a = 3;
//     {
//       let a = 1;  // different variable
//       console.log(a);  // 2
//     }
//     // console.log(a);  // 1
//   }
// letTest()





// //varaible examples//
// console.log(a)
// var a=100;
// {
//     var a =10;
//     console.log(a)
// }
// console.log(a)

// //let exmaples//

// let a=100;
// {
//     var  a=10;
//     console.log(a)
// }
// console.log(a)
// // //this is output is a has already been delcared because let not reassinging the value //


// //let concept/////////////////
// let a=10;
// // let a=10;
//     a=1
// console.log(a)
//here let it will take updation but not taking redlclaraton//


// a()
// function a(){
//     let b=10
//     // console.log(b)
// }
// console.log(b)

// //this keyword using////////////////////////////////////////////////////////
// var x = 'global';
// let y = 'global';
// console.log(this.x); // "global"
// console.log(this.y); // undefined


//diffrence betwen the var and let hoisting model//


// { // TDZ starts at beginning of scope
//   console.log(bar); // undefined
//   console.log(foo); // ReferenceError
//   var bar = 1;
//   let foo = 2; // End of TDZ (for foo)here let foo is the temporal dead zone//
// }


// results in a 'ReferenceError'
console.log(typeof i);
let i = 10;
