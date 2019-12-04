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
  var array = []; // to store the string of Common Characters.
  var str1 = string1.split('');
  var str2 = string2.split('');

  for (var i = 0; i < str1.length; i++) {
  	if (str2.includes(str1[i])) { // checking if the str1[i] is exists in str2 or not
  		if (!array.includes(str1[i])) { // to avoid dublication by checking before pushing to array if the char that i want to push is already pushed or not.
  			array.push(str1[i]);
  		}
  	}
  }
  return array.join(''); // converting the array to be string
};
