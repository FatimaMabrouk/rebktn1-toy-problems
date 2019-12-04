  
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
	//we check if the target is === center element if the array
	var center = 0;
	 //if array is empty return null right away
	 if(array.length === 0)
	 	return null;
	 // calculte the center index of the array
	 var length = array.length;
	 center = Math.round(length/2);
	if(target === array[center]){
		return center;
	}
	//we check if it's bigger
	if(target > array[center]){
		//we start looping and searching from the middle and forward
		for (var i = center+1; i < array.length; i++) {
			if(target === array[i]){
				return i;
			}
		}
	}
	//if not it means it's smaller so we search from the middle and backwards
	for (var i = center-1; i > array.length; i--) {
			if(target === array[i]){
				return i;
			}
		}

		// if all fails return null
		return null;
};