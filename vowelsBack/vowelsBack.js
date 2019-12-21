// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

// ALL GOOD

function vowelsBack(string) {
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var vowels = "aeiou";
	var exceptions = {
		"z":"a",
		"a":"v",
		"c":"b",
		"o":"n",
		"d":"a",
		"e":"a"
	};
	var toOrigin = ["c","o","d","e"];
	
	var keys = Object.keys(exceptions)
	var finalStr = "";

	for (var i = 0; i < string.length; i++) {
		if(keys.includes(string[i])) {
			finalStr += exceptions[string[i]]
		} else if(vowels.includes(string[i])) {
			var ndx = alphabet.indexOf(string[i]);
			if(toOrigin.includes(alphabet[ndx-5])) {
				finalStr += string[i]
			} else {
				finalStr += alphabet[ndx-5]
			}
		} else {
			var ndx = alphabet.indexOf(string[i]);
			var newNdx = 0;
			if(ndx+9 <= 25) {
				newNdx = ndx+9;
			} else if(ndx+9 > 25) {
				newNdx = ndx+9 - 26;
			}
			if(toOrigin.includes(alphabet[newNdx])) {
				finalStr += string[i]
			} else {
				finalStr += alphabet[newNdx]
			}
		}
	}
	return finalStr
}