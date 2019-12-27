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

var allAnagrams = function (string) {
  // Your code here.
  var arr = []
  for (var i = 0; i < string.length; i++) {
    if (!arr.includes(string[i])) {
      arr.push(string[i])
    }
  }
  var results = [];
  function anagram(comb) {
    comb = comb || '';
    if (comb.length === string.length) {
      results.push(comb)
      return
    }
    arr.forEach(item => anagram(comb + item))
  }
  anagram()
  for (var i = 0; i < results.length; i++) {
    for (var j = 0; j < results[i].length; j++) {
      for (var k = j; k < results[i].length; k++) {
        if (k !== j && results[i][j] === results[i][k]) {
          results.splice(i, 1)

        }
      }
    }
  }
  return results
};
