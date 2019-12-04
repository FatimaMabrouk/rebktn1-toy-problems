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
    var ta = target;
	var index = Math.floor(array.length/2);
	if(index === 1){
		if(ta === array[index]){
			return index;
		}
		else if(ta === array[index-1]){
			return index;
		}
		else{
			return null;
		}
	}
	if(ta === array[index]){
		return index;
	}
	else if(ta > array[index]){
		array =array.slice(index+1)
		binarySearch(array,ta)
	}
	else if(ta< array[index]){
		array =array.slice(0,index)
		binarySearch(array,ta)
	}
};

