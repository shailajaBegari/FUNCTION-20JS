// function addnumbers(list1,list2){
//     for(var i=0;i<3;i++){
//         for(var j=0;j<=i;j++){
//             var sum=list1[i]+list2[j]
//         }
//         console.log(sum)
//     }
// }
// addnumbers([50, 60, 10] ,[10, 20, 13])


///single loop///

// function addnumbers(list1,list2){
//         for(var i=0;i<3;i++){   
//             console.log(list1[i]+list2[i])
//         }
//     }
// addnumbers([50, 60, 10] ,[10, 20, 13])





///// meraki method///
function add_numbers(num1,num2){
    console.log(num1+num2);
    console.log("------------");
    }
    
    function add_numbers_list(list1,list2){
    for(var i=0;i<3;i++){
    add_numbers(list1[i],list2[i]);
}
}
    add_numbers_list([50, 60, 10],[10, 20, 13])