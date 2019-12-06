// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'.
// For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

function vowelBack(str) {
	str = str.split('');
	arr = ' abcdefghijklmnopqrstuvwxyz'.split('');
	excepObj = {c: 1, o: 1, d: 3, e: 4};
	excepRes = ["c", "o", "d", "e"];
	vowelLetter = ['a', 'i', 'u'];
	arr[0] = undefined;
	for (var i = 0; i < str.length; i++) {
		// var changed = false;
		var arrIndex = arr.indexOf(str[i])
		if(arrIndex - 5 <= 0){
			var exceptionValVowel =excepRes.indexOf(arr[arrIndex - 5 + 26])
		}else {
			var exceptionValVowel =excepRes.indexOf(arr[arrIndex - 5])
		}

		if(arrIndex + 9 > 26){
			var exceptionValCons = excepRes.indexOf(arr[arrIndex + 9 - 26])
		}else {
			var exceptionValCons = excepRes.indexOf(arr[arrIndex + 9 ])
		}
		if(excepObj[str[i]]){
			if(excepRes.indexOf(arr[arr.indexOf(str[i]) - excepObj[str[i]]]) === -1){
				str[i] = arr[arrIndex - excepObj[str[i]]]
			}
			// changed = true;
		}else if(vowelLetter.indexOf(str[i]) != -1) {
			if(exceptionValVowel === -1) {
				if(arrIndex - 5 <=0){
					str[i] = arr[arrIndex - 5 + 26]
				}else {
					str[i] = arr[arrIndex - 5];
				}
			}
		}else {
			if(exceptionValCons === -1){
				if (arrIndex + 9 > 26) {
					str[i] = arr[arrIndex + 9 - 26]
				}else{
					str[i] = arr[arrIndex + 9]
				}
			}
		}
	}
	return str.join('')

}

