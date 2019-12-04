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


	var start = 0;
	var end = array.length - 1;
	var mid = Math.floor(end / 2)
	
	if(array[mid] === target) {
 	
 		return array[mid];
	} else if (array[mid] > target) {
		
		return binarySearch(array.slice(0, mid ), target)
	} else if (array[mid] < target) {
		
		return binarySearch(array.slice(mid + 1), target)
	} 
	
	return null;

};

