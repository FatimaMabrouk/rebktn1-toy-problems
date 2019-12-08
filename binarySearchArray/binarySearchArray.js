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

var binarySearch = function (array, target, min, max) {
	 min = min  || 0;
	 max = max  || array.length;
	 var mid = min + max / 2; 
	 mid = Math.floor(mid)
	 if(target > array[mid]) {
       min = mid;       
	 }
	 if(target < array[mid]){
	 	max = mid;
	 }
	if(target === array[mid]){
		return mid;
	} if 
	else {
		binarySearch(array, target, min, max);
	}

	
  }
	

