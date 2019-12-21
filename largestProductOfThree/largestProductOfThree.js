/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/
 function largestProductOfThree(array){
  array.sort(function(a, b) {
  return b - a;
});
console.log(array)
if(array[array.length-1] * array[array.length-2]  > 0){
	console.log(array[array.length-1] * array[array.length-2] )
	if(array[array.length-1] * array[array.length-2] > array[0] * array[1]){
		console.log(array[array.length-3] , array[2])
		return array[array.length-1] * array[array.length-2] * Math.max(...array.splice(0,array.length-3))
	}
}
return array[0] * array[1]* array[2]

}