// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.


var vowelsBack = function(str) {
	var result = '';
	for(var i = 0; i < str.length; i++) {
		var test = ''
		if(str[i] === 'c' || str[i] === 'o') {
			test = String.fromCharCode(str.charCodeAt(i) - 1);
		} else if(str[i] === 'd') {
			test = String.fromCharCode(str.charCodeAt(i) - 3);
		} else if(str[i] === 'e') {
			test = String.fromCharCode(str.charCodeAt(i) - 4);
		} else if(['a', 'e', 'i', 'o', 'u'].includes(str[i])){

		if(str.charCodeAt(i) - 5 < 97) {

			var count = 97 - (str.charCodeAt(i) - 5);
			test = String.fromCharCode(122 - count);

		} else {
			test = String.fromCharCode(str.charCodeAt(i) - 5);
		}


		}else {

			if(str.charCodeAt(i) + 9 > 122){
				var count = str.charCodeAt(i) + 9 - 122;
				test = String.fromCharCode(97 + count);
			}else {
				test = String.fromCharCode(str.charCodeAt(i) + 9);	
			}
			
		}
		if (['c', 'o', 'd','e'].includes(test)) {
			result += str[i]
		} else {
			result += test
		}

	}
	console.log(result);
}

