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
	var result;
	var mid = array[0] + array.length/ 2; 
	 mid = Math.floor(mid)
	if(array.includes(target)){
		return array.indexOf(target)
	}
	if(target < mid){
		binarySearch(array, target)
		
	}
    if(target > mid){
    	binarySearch(array, target)
    }
	
}
