/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here

  for(var i = 0; i < string.length; i++) {
		var test = true;

  	for(var j = i  - 1; j >= 0; j--) {

  		if(string[i] === string[j]) {
  			test = false;
  		}
  	}

  	for(var j = i + 1; j < string.length; j++) {

  		if(string[i] === string[j]) {
  			test = false;
  		}
  	}
  	
  	if(test) {
  		return string[i]
  	}
  }

};
