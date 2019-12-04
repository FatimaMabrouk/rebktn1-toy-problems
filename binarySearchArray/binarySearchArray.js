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

/*var binarySearch = function (array, target) {
	for(var i = 0 ; i < array.length; i++) {
		if(array.includes(target)) {
			return array.indexOf(target);
		}
		else {
			return null;
		}
	}
	
};*/

	//divide the array in 2
	//if target = medium return index
	//if target < medium 
	//loop in the left array < medium 
	//else loop in the right array until target = array[i]


var binarySearch = function (array, target) {

	var start = array[0];
	var end = array.length;
	//var result = false;
	
	for(var i = 0; i< array.length) {
	
		while (start <= end ){ 
		  var middle = Math.floor((start + end)/2); 
		    if (array[middle] === target) {
		    	return array.indexOf(target); 
		    }
		    else if(array[middle] > target){
		    	end = middle - 1;
		    	return null 
		    }
		    else if(array[middle] < target) {
		    	start = middle + 1;
		    	return null;
		    }		    
		}	
	}
}
