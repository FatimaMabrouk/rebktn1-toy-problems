// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.



function vowelsBack( str ) {
	var newArr = [];
	var result = "";
	for (var i = 0; i < str.length; i++) {
		if (str[i] !== 'c'|| str[i] !== 'o'|| str[i] !== 'd'|| str[i] !== 'e') {
			newArr.push(str[i])
		}
		if ( str[i] === str[i].toLowerCase()) {
			if ( str[i] === 'c' || str[i] === 'o' ) {
					var prevLetter = newArr[i - 1];
					newArr[i - 1] = newArr[i];
					newArr[i] = prevLetter;
					
			}

			if ( str[i] === 'd' ) {
				var base1 = str[i - 2]
				var base2 = str[i - 1]
	
				newArr[i - 2] = str[i];
				newArr[i - 1] = base1;
				newArr[i] = base2;
			}
			if ( str[i] === 'e' ) {
				if(str[i - 3]){
					var base1 = str[i - 3]
					var base2 = str[i - 2]
					var base3 = str[i - 1]
					
		
					newArr[i - 3] = str[i];
					newArr[i - 2] = base1;
					newArr[i - 1] = base2;
					newArr[i] = base3;
				}
			}
		}

	}
	for (var i = 0; i < newArr.length; i++) {
		result += newArr[i]
	}

	return result;
}

