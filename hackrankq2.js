// Hackrank questions///

var empty=[]
const n=require("readline-sync")
var m=n.questionInt("enter the number:")
for(i=1;i<=m;i++){
    var m1=n.questionInt("enter the number:")
    empty.push(m1)
}
sum=0
for(j=0;j<empty.length;j++){
    sum=sum+empty[j]
}
console.log(empty)
console.log(sum)



//In python //


// def simpleArraySum(ar):
//     sum=0
//     for i in ar:
//         sum=sum+i
//     return sum

// if __name__ == '__main__':
//     fptr = open(os.environ['OUTPUT_PATH'], 'w')

//     ar_count = int(input().strip())

//     ar = list(map(int, input().rstrip().split()))

//     result = simpleArraySum(ar)

//     fptr.write(str(result) + '\n')

//     fptr.close()