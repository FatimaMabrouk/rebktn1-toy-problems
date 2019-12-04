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
	// var rootIndex = Math.floor(array.length/2)
	// var left = array.slice(0,rootIndex) 
	// var right = array.slice(rootIndex +1)
	// if(array[rootIndex] === target) {
	// 	return rootIndex
	// }
	// else if(target > array[rootIndex]) {
	// 	return binarySearch(right,target)
	// } else if(target < array[rootIndex]) {
	// 	return binarySearch(left,target)
	// }
	// else return null
	var index = null

	function check(array) {
	var rootIndex = Math.floor(array.length/2)
	var left = array.slice(0,rootIndex) 
	var right = array.slice(rootIndex +1)
	
	if(array[rootIndex] === target) {
		 index += rootIndex;
		 return ;
	}
	 if(target > array[rootIndex] ) {
		 index =  index + rootIndex
		 check(right)
		
	} else if(target < array[rootIndex]  ) {
		index =  index - rootIndex
		 check(left)
	}
	}
	check(array)
	return index

};