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
	// go to the middle and compare the element to the target then go left or go right
	//re invoke the function on the left or the right
	var copy = [...array]
	var search = function(array, target){
	var middleIndex = Math.floor(array.length / 2);
	//console.log(middleIndex)
	if(array.length === 0 ||middleIndex ===0 ){
		return null;
	}
	if(target === array[middleIndex]){
		return copy.indexOf(target);
	}
	if(target > array[middleIndex]){
		//go right
		var arr = array.slice(middleIndex)
			if(arr.length === 0){
				return null;
			}
		 middleIndex = Math.floor(arr.length / 2);
		return search(arr, target);
	}

	if(target < array[middleIndex]){
		//go left
		if(arra.length === 0){
				return null;
			}
		var arra = array.slice(0, middleIndex)
		 middleIndex = Math.floor(arra.length / 2);
		return search(arra, target);
		}
	}
	return search(array, target)
}


