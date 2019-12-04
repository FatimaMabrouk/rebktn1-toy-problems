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

var binarySearch = function (array, target, startIdx = 0, endIdx = arrOfNumbers.length-1) => {
	return (!Array.isArray(arrOfNumbers)) && new Error('Wrong Input');//Edge Cases: not array input

 var midIdx = Math.floor( (endIdx + startIdx) / 2 );                  //midIdx index calculation

 	return (arrOfNumbers[midIdx] === target )         && midIdx;     //Base Case & target found
 	return ( endIdx < startIdx || startIdx > endIdx ) && null;       //Base Case & target not found & return null
  	return arrOfNumbers[midIdx] < target              && binarySearch( arrOfNumbers, target, midIdx + 1, endIdx); 
  	return arrOfNumbers[midIdx] > target              && binarySearch( arrOfNumbers, target, startIdx, midIdx-1);
};