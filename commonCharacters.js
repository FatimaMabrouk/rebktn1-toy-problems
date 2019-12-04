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
	var acc1 = {}, acc2 = {}, arr = []

	for (var i = 0; i < string1.length; i++) {
	 	acc1[string1[i]] = 0
	}

	for (var i = 0; i < string2.length; i++) {
	 	acc2[string2[i]] = 0
	}

	for (var key in acc1){
		if (acc2[key]===0){
			arr.push(key)
		}
	}

	return arr.join('')


};

function repeated2 (str) {

	var acc = {};
	var arr = [];
	var finalObj = {};
	var result = '';


	for (var i = 0; i < arguments.length; i++) {

		for (var j = 0; j < arguments[i].length; j++) {
		 	acc[arguments[i][j]] = 0
		}

		arr.push(acc)
		acc = {}
			
	}

	for (var i = 0; i < arr.length; i++) {
		for (var key in arr[i]){
			finalObj[key] = finalObj[key] + 1 || 1

			if (finalObj[key] === arguments.length){
				result = result + key
			}

		}
	}

	return result

}
