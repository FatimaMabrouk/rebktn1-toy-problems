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
	var middle = Math.floor(array.length/2)
	
	if(array[middle] === target) {
		return middle;
	} 
	if(array.length ===1 && array[middle] !== target) {
		return null;
	}
	if(array[middle] < target) {
		return binarySearch(array.slice(middle), target)
	} else {
		return binarySearch(array.slice(0, middle), target)
	}
	
};

