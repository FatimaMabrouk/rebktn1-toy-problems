/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
    if(array.length === 3) return array[0] * array[1] * array[2];
    let productsOfThrees = [];
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(j === i) j++;
            for(let k = 0; k < array.length; k++){
                if(k === i) {k = k + 2;}
                if(k === j) {k = k + 2;}
                if (!isNaN(array[i] * array[k] * array[j])) {
                    productsOfThrees.push(array[i] * array[k] * array[j]);
                }
            }
        }
    }
    return Math.max(...productsOfThrees);
}
