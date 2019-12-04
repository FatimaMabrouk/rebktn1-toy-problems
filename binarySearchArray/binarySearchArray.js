/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

 // I used a for loop and if conditions to check if the value is on the right side or the left side of the array starting from the middle if it's not then start from zero and increment till you reach the target if it's not found return null.

var binarySearch = function (array, target) {
	for (var i = 0; i < array.length; i++) {
		if (target >= array[array.length / 2]) {
			i = array[array.length / 2];
			if(target === array[i]) {
				return i;
			}
		} else if(target === array[i]) {
				return i;
			}
	};
	return null;
}

binarySearch([1, 2, 3, 4, 5], 4);
binarySearch([1, 2, 3, 4, 5], 8);











