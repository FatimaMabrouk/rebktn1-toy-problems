/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(arrayOfNumber) {
  return  arrayOfNumber.map( (element, index, arr) => {return Math.abs(element)})
  .sort()
  .slice(array.length - 3, array.length)
  .reduce((acc,currentValue) => {return acc * currentValue} )
}