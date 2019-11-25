/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
 string = 'AACBDB'
arr = {};

counter = [];
  for (var i = 0; i < string.length; i++) {
      arr[string.charCodeAt(i)-65]++;  ;
  }
arr

};

//uncomplet answer
