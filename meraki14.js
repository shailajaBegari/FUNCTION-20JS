// function check_numbers_list(list1,list2){
//     for(i=0;i<list1.length;i++){
//             if(list1[i]%2==0 && list2[i]%2==0){
//                 console.log("both are even")
//             }else{
//                 console.log("both are not  even ")
//         }
//     }
// }
// check_numbers_list( [2, 6, 18, 10, 3, 75] ,[6, 19, 24, 12, 3, 87] ) 


////////////////////////////////////////////////////////////////////////////////////////////

function check(num1,num2){
    if (num1%2==0 && num2%2==0){
        console.log("even")
    }else{
        console.log("odd")
    }
}
function add_list(list1,list2){
    for(i in list1){
        check(list1[i],list2[i])
    }
}
add_list([2, 6, 18, 10, 3, 75] ,[6, 19, 24, 12, 3, 87])