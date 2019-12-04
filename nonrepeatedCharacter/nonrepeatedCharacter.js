/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
// we are going to split and itterate than check if it is there twice or not if yes return it if not just doesn't return any value 
// couldn't solve it in tim and i couldn't comment in details cauz this is  commented in the last min 
var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var result = null ; 
  result = string.split('')
  for(var i =0; i < arr.length; i++){
  if(string.indexOf(string[i]) === i && string.indexOf(string[i++]) === -1 ){
  	result = string[]; 
  }
  }
  return result ; 
};
