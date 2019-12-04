/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var str = '';

  for (var i = 0; i < string1.length; i++) {
  	for (var j = 0; j < string2.length; j++) {

  		if(string1[i] === string2[j]){

  		    var value = false;
  			for (var c = 0; c <= string2.length; c++) {
  				if(j < c){
                  value = true;
  				}
  				else{
                 value = false;
  				}
  			}
  			if(value === true){
  				str+=string1[i];
  				
  			}
  		}
  	}
  }
  
  return str;
};
