/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

// I solved it using two varibles and the built in function sort to sort the array and used a for loop to check if the result of multiplying all the numbers is positive.
// if it is the next for loop will be executed to get the absolute value if each element and store it in the the same array and then thesort function will be excited again, and then the next for loop will be executed which will get the product of the largest threee numbers.
// and the result will be stored in the varible result and returned.
function largestProductOfThree(array) {
	array.sort();
	var check = 1;
	var result = 1;

	for (var i = 0; i < array.length; i++) {
		check *= array[i];
	}
	
	if (check >= 0) {
		for (var i = 0; i < array.length; i++) {
			array[i] = Math.abs(array[i]);
		}
	}
	
	array.sort();

	for (var i = array.length - 1; i > array.length - 4; i--) {
		result *= array[i];
	}
	return result;
}

largestProductOfThree([1, 4, -5, -2]);

largestProductOfThree([ 2, 1, 3, 7 ]);

largestProductOfThree([ 0, 2, 3 ]);
