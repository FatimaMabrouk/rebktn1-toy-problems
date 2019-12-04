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
 // logicaly i think it works like this but i don't know what it is missing exactly ,
 // all what we have to here is to keep spliting the array and check if the target is bigger or smaller than the mid number so we can know how which array we ll keep looking in either left or right and each time we get rid of the half array that we don't want to use and use the recursion here to check each time and do the same work ,
 //untill we get to it else w e return null . 

var binarySearch = function (array, target) {
 	var mid = array.length / 2 ; 
 		
 		if (array[0] === target){
 			return array[0];
 		}else if (array[array.length-1] === target){
 			return array.length-1;
 		}else if (array[mid] === target){
 			return mid ;
 		}else if (array[mid] > target){
 			let newArr = array.splice(0, array[mid])
 			return binarySearch(newArr , target); 
 		}else if (array[mid] < target){
 			let newArr = array.splice(array[mid],array.length)
 			return binarySearch(newArr , target); 
 		}else{
 			return null;
 		}
};

