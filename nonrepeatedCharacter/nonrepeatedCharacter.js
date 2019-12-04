/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var count = {}; 
  for ( var i=0; i<string.length; i++){
  	if (count[string[i]]){
  		count[string[i]]++;
  	}else{
  		count[string[i]]= 1;
  	}
  }
  for ( var i =0; i<string.length; i++){
  	if ( count[string[i]] ===1){
  		return string[i];
  	}
  	}
}