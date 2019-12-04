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
	var index = Math.ceil(array.length/2)

	if (array[index] === target){
		return index
	}

	if (array[index]<target){
		binarySearch(array.splice(index+1))
	} 
	if (array[index]>target){
		binarySearch(array.splice(0,index + 1))
	}

};

