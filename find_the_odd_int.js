// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Test.describe('Example tests', function() {
//     doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//     doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//     doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//     doTest([10], 10);
//     doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
//     doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
//   });


let a = [20,1,1,2,2,3,3,5,5,4,20,4,5]

function findOdd(a) {
  
    let odd = 0
    a.forEach(num => {
      if(a.filter(x => x === num).length % 2 === 1){
          odd = num
      }
    })
    return odd 
}


console.log(findOdd(a))




// const findOdd = (xs) => {
//     return xs.reduce((a, b) => a ^ b)
// }
// console.log(findOdd(xs))