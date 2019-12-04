/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
//solution 1
var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var obj={}
  for (var i = 0; i < string.length; i++) {
  	if(obj[string[i]]=== undefined ){
  		obj[string[i]]=1
  	}else{
  	obj[string[i]]=obj[string[i]]+1;
  }
}

for (key in obj) {
	if(obj[key]===1)
		return key
}
     return null                                                                       
};
