/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
 */

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
 */

// Feel free to add helper functions if needed.

//for this the time complexity is O(n²)
var bubbleSort = function(array) {
  //make a copy of the array
  var copyArray = array.map(elm => {
    return elm;
  });
  //use recursion to repeat the steps
  var innerFunction = (arr, nbrOfChanges, length) => {
    //check if the number of changes equal to 0
    if (!nbrOfChanges) {
      //return the sorted array
      return arr;
    }
    //loop over the array
    for (var i = 0; i < length; i++) {
      //if i is equal to zero
      if (!i) {
        // reset the number of changes to zero
        nbrOfChanges = 0;
      }
      //check if the current element is bigger than the next
      if (arr[i] > arr[i + 1]) {
        //swap the two elements
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        //increment the number of changes
        nbrOfChanges++;
      }
      //check if i is equal to the  index of the last element
      if (i === length - 1) {
        //call the function again to repeat the steps
        return innerFunction(arr, nbrOfChanges, length - 1);
      }
    }
  };
  //call the function and return it to get the sorted array
  return innerFunction(copyArray, 1, copyArray.length);
};
