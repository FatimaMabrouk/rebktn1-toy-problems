/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var array = string.split('')
  var arr = []
  var nonRepeated = ''
  for (var i = 0; i < array.length; i++) {
  	arr = array.slice(i)
  	for (var j = 0; i < arr.length; j++) {
  		if (array[i] !== arr[j]) {
			nonRepeated = array[i]
  		} 
  	}
  }

};
