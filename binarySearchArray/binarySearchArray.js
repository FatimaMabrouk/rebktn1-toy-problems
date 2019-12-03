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

 //pseudoCode
 //0 deividing the array into to halfs for insertion.
 //1 adding the array elements into the tree as a nodes
 //2 

var binarySearch = function (array, target) {
return (!Array.isArray(array)) && new Error('Wrong Input'); 

 var min = arguments[2] || 0;
 var max = arguments[3] || array.length-1;
 var mid = Math.floor( (max + min) / 2 );
//checking if the target
 if(array[mid] === target ){
 	return mid;
 }
//base case;
 if( max < min || min > max ){
 	return null;
 }
  	return array[mid] < target && binarySearch( array, target, mid + 1, max);
  	return array[mid] > target && binarySearch( array, target, min, mid-1);
}