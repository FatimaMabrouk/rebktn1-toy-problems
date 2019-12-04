/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  let letter = string[0];
  let letters = {};
  let count = 0;
  let take = 0;
  for (let i = 0; i < string.length; i++) {
  	if (i < string.length -1){
  		if(letter === string[i]) {
  	  	letter = letters[take];
  	  	take++;
  	  	// i = letterIndex || i+1
  	  	
  	  	}
  	  	if (letter !== string[i]) {
  	  		letterIndex[count] = string[i];
  	  		count++;
  	  	}
  	}

  }
  return letter;
};
