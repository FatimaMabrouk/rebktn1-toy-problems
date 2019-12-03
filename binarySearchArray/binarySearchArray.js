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
  var result = null;
  
  for (var i = 0 ; i < array.length; i++) {
    if(target === array[i]) {
      // console.log(i);
      result = 0;
      result += i ;
    }

  if (target === array[i]) {
    return result;
    }
  }
  return result;
  
};



