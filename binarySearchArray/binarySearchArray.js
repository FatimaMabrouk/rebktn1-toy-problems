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

var binarySearch = function (array, target, start = 0, end = array.length) {
	var mid = Math.floor((end + start) / 2);
	if(target == array[mid]) {
		return mid;
	}else if(array.length - 1 === mid){
		return null;
	}else if(target > array[mid]) {

		return binarySearch(array, target, mid, end)
	}else if(target < array[mid]){
		return binarySearch(array, target, start, mid)
	}
};

