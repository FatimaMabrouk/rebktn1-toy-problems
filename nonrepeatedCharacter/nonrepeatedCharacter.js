/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var stringSplitted=string.split('')
  console.log(stringSplitted)
  for(var i=0 ; i<stringSplitted.length;i++) {
  	 var character = stringSplitted[i]
  	   var arr = stringSplitted.slice(i+1)

  	 
  	 //console.log(arr)

  	 
  	 if(!arr.includes(character)) {
  	 	return character;
  	 }

  }
	
};
