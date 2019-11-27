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
	var objOfChar = {}
  for(var i = 0; i < arguments.length; i++) {
  	var wordI = arguments[i]
  	for(var j = 0; j < wordI.length; j++) {
			if(objOfChar[wordI[j]] === undefined) {
				objOfChar[wordI[j]] = 1;
			} else {
				objOfChar[wordI[j]] += 1;
			}
		}
		
  }
	var result = '';
	for (var key in objOfChar) {
		if (objOfChar[key] >= 3) {
			result += key;
		}
		console.log(arguments.length)
	}
	return result;
};