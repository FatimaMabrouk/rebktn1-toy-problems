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

// If target == mid array return position
// Else if smaller Loop from mid to zero and compare
// Else Loop from mid to array length
console.clear();

var binarySearch = function(array, target) {
    let mid = Math.floor(array.length / 2);

    if (array[mid] === target) {
        return mid;
    } else if (target < array[mid]) {
        for (var i = mid; i >= 0; i--) {
            if (array[i] === target) {
                return i;
            }
        }
    } else {
        for (var i = mid; i < array.length; i++) {
            if (array[i] === target) {
                return i;
            }
        }
    }
};

console.log(binarySearch([1, 2, 3, 4, 5], 4));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 8));

