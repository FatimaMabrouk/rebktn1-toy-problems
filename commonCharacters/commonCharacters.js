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
	//creates an array of strings --->  ["acexivou", "aegihobu"]
		// var arrayOfStrings = Array.from(arguments);
		
	//change str to array
	var array1 = string1.split('');
	var array2 = string2.split('');
	var result = [];
	var elm;
	//iterates over the first array
	for( var i = 0; i < array1.length; i++ ) {
		//check if elements of array 1 are in array2
		if( array2.includes( array1[i] ) ) { 
			//if true push to result
			result.push( array1[i] ) }
	}
	return result.join('');
};
