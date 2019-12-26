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

var allAnagrams = function(string, str = '', result= [], counter = 0) {
  
  // if(result.length === 6) return result; //couldnt think about stopping condition
  if(str.length === string.length) {
    result.push(str);
    str = '';
  }
  if(string.length === 1) return [string];

  if(counter >= string.length) counter = 0;

  for(var x = 0; x < string.length; x++){
    allAnagrams(string, str + string[counter], result, ++counter);
    if(x === string.length-1) return result;
  }

return result;
};
