/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
function count(char,str) {
	var num = 0;
	for (var i =0;i<str.length;i++) {
		if (str[i] === char) {
			num++
		}
	}
	return num;
}
var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  
  for (var i = 0; i < string.length; i++) {
  	if(count(string[i],string) === 1) {
  		return string[i];
  	}
  	
  }

  return "All chars are repeated";
};
