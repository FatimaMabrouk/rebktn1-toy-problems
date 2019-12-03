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

var binarySearch = function (array, target,firstIndex,lastIndex) {
	 firstIndex = firstIndex || 0;
	 lastIndex = lastIndex || array.length - 1;
	let medIndex =  Math.floor( (firstIndex+lastIndex)/2 ) ;

	if(array[medIndex] === target)
		return medIndex;
	else if (target > array[medIndex])
		return binarySearch(array, target , medIndex+1 , lastIndex);
	else if (target < array[medIndex])
		return binarySearch(array, target , firstIndex , medIndex-1);
	else return null;
	};
	//SOLVED


