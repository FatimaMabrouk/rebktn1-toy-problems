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

var binarySearch = function (array, target, mid) {
    mid = mid || Number.parseInt(array.length / 2);
    if(target === array[mid]) return mid;
    if(target < array[mid])return binarySearch(array, target, Number.parseInt(mid / 2));
    if(target > array[mid]){
        if( Number.parseInt(mid + ((array.length -1 - mid ) / 2)) === mid) return null;
        return binarySearch(array, target, Number.parseInt(mid + ((array.length -1 - mid ) / 2)))
    }
    return null;
};

