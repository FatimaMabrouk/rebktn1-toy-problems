/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {

	//loop through the string
	// count how many times each is repeated
	// break after the finding one

	var arr = string.split('');

	var acc = {};

	// initiate unique counters for each letter

	for (var i = 0; i < arr.length; i++) {
		acc[arr[i]] = 0
	}


	// increment each value corrosponding to a key

	for (var i = 0; i < arr.length; i++) {
		acc[arr[i]] = acc[arr[i]] + 1
	}


	for(var key in acc){
		if (acc[key]===1) {
			return key
		}
	}



};
