/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/


function largestProductOfThree(array) {
    let result = 1
    array.sort((a,b)=> b-a)
    for (let i = 0; i < 3; i++){
        if (array[i] === 0) {
            return 0
        }
        result *= Math.abs(array[i])
    }
    return result
}
