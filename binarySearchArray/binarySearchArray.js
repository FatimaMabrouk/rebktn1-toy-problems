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


	//do mid
	var midIndx = array.length / 2
	midIndx = parseInt(midIndx)
	if(array[midIndx] === target){
		return midIndx
	}

	// compare if bigger go right else go left
	if(target > array[midIndx] && array.length >= 0){
		// go right
		var rightSide = array.slice(midIndx)

		//do mid
		binarySearch(rightSide,target)
		// var midIndx = rightSide.length / 2
		// midIndx = parseInt(midIndx)
	}

	// go left
	else {
		var leftSide = array
		leftSide.length = midIndx 
		//do mid
		midIndx = parseInt(leftSide.length / 2)
		if(leftSide[midIndx] == target){
			return midIndx * 2
		}
		//

	}

};

