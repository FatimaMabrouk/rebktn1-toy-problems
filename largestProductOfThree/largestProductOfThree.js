/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

console.clear();
function largestProductOfThree(array) {
    array = array.map(n=>Math.abs(n)).sort((a,b)=>a - b);
    let largest = array[array.length - 1];
    let smallest = array[0];
    let nums = [];

    for (var c = array.length - 1; c >= 0; c--) {
        if (array[c] <= largest && nums.length < 3) {
            nums.push(array[c]);
        }
    }
    return nums.reduce((acc,n)=>acc * n);
}

// console.log(largestProductOfThree([2, 7, 3, 1, 4]));
// console.log(largestProductOfThree([2, 1, 3, 7]));
// console.log(largestProductOfThree([0, 2, 3]));
// console.log(largestProductOfThree([1, 4, -5, -2]));
// console.log(largestProductOfThree([ 0, 2, 7, 1, 5 ]));