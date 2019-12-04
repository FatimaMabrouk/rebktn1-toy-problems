/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

// I traid to loop through the string twice ro check every letter and return the non repeated letter only.

var firstNonRepeatedCharacter = function(string) {
	var str = '';
  for (var i = 0; i < string.length; i++) {
  	for (var j = i + 1; j < string.length; j++) {
  		if (string[i] !== string[j]) {
  			str = string[i]
  			break;
  		}
  	}
  }
  return str;
};


  firstNonRepeatedCharacter('ABA'); // => 'B'
  firstNonRepeatedCharacter('AACBDB'); // => 'C'