/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
    var out =1;
    for(i = 0;i<array.length;i++){
        //check if we have a zero, return zero right away
        if(array[i] === 0){
            return 0;
        }
        if(i+1 < array.length){
        out = out * (array[i] * array[i+1])
        }
        i= i +1;
    }
    return out
}
