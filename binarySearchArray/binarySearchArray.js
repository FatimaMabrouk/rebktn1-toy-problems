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

	// I know it is basic solution and it needs refactoring 
	var binarySearch = function (array, target) {
	var min = 0 ;
	var max = array.length -1
	var find = Math.floor((min + max) / 2)
	if (target > max ) return null;
	if (target < 0 ) return null; 
	while (max <= max) {
		find = Math.floor((min + max) / 2)
		if (min > max ){
			return -1; 
		}
		else if ( target === array[find]){
			return find;
		}
		else if ( target > array[find]){
			min = find + 1;
		}
		else if  ( target < array[find]){
			max = find - 1;
		} 
	}
};

