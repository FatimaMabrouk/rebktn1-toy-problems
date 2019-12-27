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
  var array = [];
  array.push(string.split());
  var combo = [];
  var str = '';

  for (var i = 0; i < array.length; i++) {
  	str+= array[i];
  	for (var j = i + 1; j < array.length; j++) {
  		str+= array[j];
  	}
  	combo.push(str);
  	str = '';
  }
  return combo;
};

var anagrams = allAnagrams('abc');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]