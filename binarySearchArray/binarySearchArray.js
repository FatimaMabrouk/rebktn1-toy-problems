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
    
	var len = array.length;
	var mid = array[Math.floor(len/2)];
	

	
	if (array.length === 1 && array[0] !== target) {
		return null
	}


	if(target < array[0] || target > array[len - 1]) {
		return null
	}

	if(target === mid) {
		return Math.floor(len/2)
	}
	else if(target < mid) {
		
		return binarySearch(array.slice(0, Math.floor(len/2) + 1), target)
	} else if (target > mid) {
		
		return binarySearch(array.slice(Math.floor(len/2) ), target) 
	}
}
