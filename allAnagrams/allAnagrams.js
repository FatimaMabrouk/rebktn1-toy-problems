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

res = [];
var allAnagrams = function (string) {
  if (string.length === 0) {
    res.push(arguments[1]);
    return;
  }

  let combo = arguments[1] || '';
  for (let i = 0; i < string.length; i++) {
    combo += string[i];
    allAnagrams(string.slice(0, i) + string.slice(i + 1), combo);
    combo = combo.slice(0, combo.length - 1);
  }

  return res;
};

allAnagrams('abc')
