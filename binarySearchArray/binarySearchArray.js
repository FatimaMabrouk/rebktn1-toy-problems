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

var binarySearch = function (array, target, index) {
     index = index || undefined;

        var middle = Math.floor(Math.floor(array.length) / 2 )
        console.log(middle)

        if (target > array[array.length - 1] || target < array[0] || array.length === 0){
            return null
        }
        if (target === array[middle]) {
            return index
        }
        if (target > array[middle]) {
            var tab = array.slice(middle)
            console.log(tab)
            index = middle + 1 
            console.log(index)
            return binarySearch(tab, target, index)
        }

        if (target < array[middle]) {
            var tab = array.slice(0, middle + 1)
            index = middle - 1  
            console.log(tab)
            console.log(index)
            return binarySearch(tab, target,index)
        }
    };
