/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  //create an object to store the letters and how many time they are repeated
  var obj = {};
  //loop over the string to fill the object
  for (var i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]]++;
    }
  }
  //loop over the object to find the first non repeated letter
  for (var key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
};
