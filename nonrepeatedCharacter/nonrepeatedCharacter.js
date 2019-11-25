/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var doubled = [];
  var single = [];
    for (var i = 0; i < string.length; i++) {
  		if(single.indexOf(string[i]) !== - 1) { 
  			doubled.push(string[i]);
  			single.splice(single.indexOf(string[i]), 1);
  		}else if(doubled.indexOf(string[i]) === -1){
  			single.push(string[i]);
  		}
  	}
  	return single[0];
};
