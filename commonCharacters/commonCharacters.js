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



var commonCharacters = function(string1, string2, string3) {
//assigning a string.
  var dupstr = '';
  //iteraition over string
  for (var i = 0; i < string1.length; i++) {
  	var index = string2.indexOf(string1[i]);
  		if (index >=0) {
  			dupstr += string2[index]
  	}
  }
  return dupstr;
};