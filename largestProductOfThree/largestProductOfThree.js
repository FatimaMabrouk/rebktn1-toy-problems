/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
	if(array.length < 3) {
		return 'the array should contain at least 3 numbers'
	}
var res = 0;
  for (var i = 0; i<array.length; i++) {
  for (var j = i + 1; j < array.length; j++) {
  for (var k = j + 1; k < array.length; k++) {
        var total = array[i] * array[j] * array[k];
        if (total > res) {
          res = total;
     }
    }
   }
  }
  	return res;
}
	