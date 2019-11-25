/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  if(string.length === 0){
  	return 'all characters are repeated';
  }
  if(string.indexOf(string[0] === -1)){
  	return string[0];
  }
   return firstNonRepeatedCharacter(string.slice(1))

};
