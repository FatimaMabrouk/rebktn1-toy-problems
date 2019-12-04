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
var bubbleSort = function(array) {
  // Your code here.
  function recurse(array) {
    for (var i = 0, j = 1; i < array.length, j < array.length; i++, j++) {
      var num = array[i];
      var num2 = array[j]
      if (array[j] < array[i]) {
        array[j] = num;
        array[i] = num2
      }
    }
    return array
  };
  for (var i = 0; i < array.length; i++) {
    recurse(array)
    //console.log(array)
  }
  return array
};
var binarySearch = function (array,target) {
	const realIndex = array.slice()
	function recurese(array,target){
		array = bubbleSort(array)
		var arr2 = array.slice(array.length/2)
		var arr1 = array.slice(0,array.length/2)
		if(target < arr2[0]) {
			array = arr1;
		}
		else{
			array = arr2
		}
		if(array.length === 1 && array[0] !== target){
			return null
		}		
		if(target === array[0]){
			return realIndex.indexOf(target)
		}
		else {
			return recurese(array,target)
		}
	}
	return recurese(array,target)
};

