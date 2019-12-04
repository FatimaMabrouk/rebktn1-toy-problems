/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here

  //convert to uppercase for better matching
  string = string.toUpperCase()

  //chek for repeted charachters and assigne them to 0
  var tmpStr = string.split('')
  for (var i = 0; i < tmpStr.length; i++) {
  	for (var j = i+1; j < tmpStr.length; j++) {
  		if(tmpStr[i] === tmpStr[j]){
  			tmpStr.splice(i,1,0)
  			tmpStr.splice(j,1,0)
  		}
  	}
  }
 //print firtst charachter which is not assigne to 0 
  return tmpStr.find(ele => ele !== 0)  
};
