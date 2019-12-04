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
  var common = [];
  var s1 = string1.split('');
  var s2 = string2.split('');
  for (var i =0; i < s1.length; i ++){
if (s2 .includes(s1[i])){
	common.push(s1[i])
}
 }
   return common.join('');
};


