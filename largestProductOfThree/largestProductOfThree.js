/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
	if(array.length < 3) {
		return "Not enough elems"
	}

	var max = array[0]*array[1]*array[2];

	for (var i = 0; i < array.length; i++) {
		for (var j = i+1; j < array.length ; j++) {
			for (var k = j+1; k < array.length; k++) {
				if(array[i]*array[j]*array[k] > max) {
					max = array[i]*array[j]*array[k];
				}
			}
		}	
	}

	return max
}

