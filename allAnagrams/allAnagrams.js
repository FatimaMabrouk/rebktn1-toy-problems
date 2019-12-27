/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.

var arr = string.split('')

for (var i = 0; i < arr.length; i++) {
	arr[i].splice(i,1,arr[i+1])
	console.log(arr[i])
}

};

/*
 
  for (var i = 0; i < string.length; i++) {
    var fChar = string[i];
    var chars =string.substring(0, i)+string.substring(i + 1);     
  }
  
*/