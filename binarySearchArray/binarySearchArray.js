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
var mid = 0
  if (array.length===1){
      return array
  }
    if(array.length %2 === 0){
        mid= (array.length /2)-1
    }else if (array.length %2 === 1){
        mid= array.length -1/2
    }
    if(array[mid]>target){
        binarySearch(array.splice(0,mid+1),target)
    }else{
        binarySearch(array.splice(mid,array.length-1),target)
    }
    return array
};

