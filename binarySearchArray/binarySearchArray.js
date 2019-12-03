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

var binarySearch = function (array, target, startingPosition, endingPosition, index) {
    startingPosition = startingPosition || 0;
    endingPosition = endingPosition || array.length;
    index = index || Math.ceil((endingPosition - startingPosition) / 2);
    console.log(index, startingPosition, endingPosition, Math.ceil((endingPosition - startingPosition) / 2))

    if (array[index] === target) {
        console.log(index)
        return index;
    } else if (target > array[index]) {
        startingPosition = index;
        index += Math.ceil((endingPosition - startingPosition) / 2)
        return binarySearch(array, target, startingPosition, endingPosition, index)
    } else if (target < array[index]) {
        endingPosition = index;
        index = index - Math.ceil((endingPosition - startingPosition) / 2)
        return binarySearch(array, target, startingPosition, endingPosition, index)

    }
    if (index === 0 || index === array.length - 1) {
        return null
    }
};

