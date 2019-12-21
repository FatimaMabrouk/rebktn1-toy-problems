/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of 
those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
	//return absolute value of array[i]
	//sort the array 
	// product of 3 last element in the array 
	var product = 1;
	var newArray = [];
	for(var i = 0; i < array.length; i++) {
		newArray.push(Math.abs(array[i]))
	}
	var sortedArray = newArray.sort();
	console.log(sortedArray)
	var len = sortedArray.length;
	for(var i = 0; i < len; i++) {
		product = sortedArray[len-1] * sortedArray[len-2] *sortedArray[len-3] ;
    }
	return product; 
}
