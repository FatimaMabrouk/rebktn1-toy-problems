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


var binarySearch = function (array, target,middelIndex=Math.floor(array.length/2)) {
	// var middelIndex = arguments[2] || Math.floor(array.length/2)
if((middelIndex===array.length-1) ||  (middelIndex === 0)){
	if(array[middelIndex]===target) return middelIndex
		return null}
else{
	if(target === array[middelIndex])  return middelIndex

	if(target > array[middelIndex]){
		middelIndex =Math.floor(((array.length - middelIndex)/2)+middelIndex);

	}else if(target < array[middelIndex]){
		middelIndex =Math.floor(middelIndex/2);			
	}	
}
	return binarySearch(array,target,middelIndex)

};









var binarySearch = function (array, target, start = 0, end = array.length) {
	var mid = Math.floor((end + start) / 2);
	if(target == array[mid]) {
		return mid;
	}else if(array.length - 1 === mid){
		return null;
	}else if(target > array[mid]) {

		return binarySearch(array, target, mid, end)
	}else if(target < array[mid]){
		return binarySearch(array, target, start, mid)
	}
};