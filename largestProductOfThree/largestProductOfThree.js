/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
	
	var a = Math.max(...array)
	console.log(a)
	array = array.splice(array.indexOf(a),1)
	console.log(array)
	var b = Math.max(...array)
	console.log(b)
	array = array.splice(array.indexOf(a),1)
	
	var c = Math.max(...array)
	console.log(c)
	return a*b*c

}
