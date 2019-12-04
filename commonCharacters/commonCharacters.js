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
  let result = "";
  let str1 = string1.split(" ");
  let str2 = string2.split(" ");

  for (let x = 0; x < str1.length; x++) {
  		for (let i = 0; i < str2.length; i++) {
  			if(str2[i] === str1[x]){
  				result += str2[i];
  			}
  		}
  	
  }

  return result;
};
