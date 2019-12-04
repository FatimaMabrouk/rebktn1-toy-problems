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

	var indexCount;
	var flag = false;

	var check = function (array, target) {
		if(array.length === 0) {
			return indexCount - 1;
		}
		var mid = array[Math.floor(array.length/2)]
		if(flag) {
			indexCount = array.length;
		};	
		if( array[0] === target || target === mid) {
			return indexCount - 1;
		}
		console.log(array)
		//console.log(indexCount)
		console.log(mid)
		if (target > mid ) {
			flag = true;
			check ( array.slice(array.indexOf(mid)-1), target );
		}
	} 

	check(array, target);
	return indexCount;

};

