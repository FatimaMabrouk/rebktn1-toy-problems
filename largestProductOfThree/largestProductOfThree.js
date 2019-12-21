/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

// function largestProductOfThree(array) {

//   var arr = []
//   var result = 1

//   for (var i = 0 ; i < array.length ;i++){

//     array[i] = Math.abs(array[i])

//   }
//   array = array.sort((a,b)=>{
//     return a-b 
//   })

//   var index = array.length
//   result = array[index-1]*array[index-2]*array[index-3]

//   return result
// }

// largestProductOfThree([1, 4, -5, -2])

