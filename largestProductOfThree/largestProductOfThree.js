/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array, result = []) {
    if (array.length === 0) {
        return result[0] * result[1] * result[2]
    }

    if (Math.abs(array[0]) > result[0] || !result[0]) {
        result.splice(0, 0, Math.abs(array[0]))
    } else if (Math.abs(array[0]) > result[1] || !result[1]) {
        result.splice(1, 0, Math.abs(array[0]))
    } else if (Math.abs(array[0]) > result[2] || !result[2]) {
        result.splice(2, 0, Math.abs(array[0]))
    }
    largestProductOfThree(array.slice(1), result)
}
