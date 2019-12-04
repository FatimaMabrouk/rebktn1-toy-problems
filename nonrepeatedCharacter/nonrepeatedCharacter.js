/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var str = string[0];
  var c = 0;

  for (var i = 0; i < string.length; i++) {
  	if (string[i] === str) {
  		string[i].slice(1);
  		c++;

  		if (c > 0) {
  			string[0].slice(1);
  		}
  	}
  }
  return string;
};
