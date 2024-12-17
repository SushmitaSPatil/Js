
// Map
// const arr=[1,3,5,7,9]

// // task to double every  Elementof the array
// // 1. visit every element
// //2. you will perform an action on it

// const output=arr.map(double)

//  function double(x) {
//      return x*2;
//  }
// console.log(arr)
// console.log(output)


// // function addbonus(salary){
// //     salary=salary+1000 ;
// //     return salary;
// // }
// // (salary)=>{
// //     salary=salary+1000;
// //     return salary;
// // }
// // // Or

// // (salary)=>salary+=1000;


// // arr.map((y)=>{
// //     return y/2;
// // })
// // Or

// const dividedOutput=arr.map((y) => y/2);
// console.log(dividedOutput)







// filter

// const arr=[2,3,6,9,10]

// // function isOdd(x){
// //     return x%2;
// // }

// function greater(x) {
//     return x>4;
// }

// const output=arr.filter(greater)

// console.log(output)







// Reduce

// const arr=[2,4,5,7,8,10]

// const output=arr.reduce((acc,curr)=>{
//     acc=acc+curr;
//     return acc;
// },0)
// console.log(output)


const arr=[2,4,15,7,8]

const output=arr.reduce((max,curr)=>{
    if(curr>max){
        max=curr;

    }
    return max;
},0)
console.log(output)