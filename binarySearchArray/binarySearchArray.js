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

var binarySearch = function (array, target) {
<<<<<<< HEAD
	
	if (target > array.length) {
		return null;
	} else if (array[target - 1] === target) {
			return array.indexOf(array[target - 1]);
	}
};
=======
};

>>>>>>> 269a3ee75c6d59550b6ccccaefaa5cb33683dbdd
