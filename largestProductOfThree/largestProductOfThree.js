/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
	var totalProduct = 1; tempArray = []
	//total value of product all elements
	for (var i = 0; i < array.length; i++) {
		totalProduct *= array[i] 
	}


	//subtract one element to get the result for the other elements
	for (var i = 0; i < array.length; i++) {
		if(array[i] === 0){
			continue
		}
		tempArray.push( totalProduct/array[i])
	}

	//find the biggest number
	return Math.max(...tempArray)
}
