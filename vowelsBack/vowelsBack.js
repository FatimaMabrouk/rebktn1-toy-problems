// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

function vowelsBack(string) {
	debugger;
	var array = string.split('');
	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var number = 0;
	var original;


	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < letters.length; j++) {
			if (array[i] == letters[j]) {
				if (array[i] === 'a' || array[i] === 'i' || array[i] === 'u') {
					original = array[i];
					if (j - 5 < 0) {
						number = (letters.length - 1) - (j - 5) ;
						array[i] = letters[number];
						if (array[i] === 'c' || array[i] === 'o' || array[i] === 'd' || array[i] === 'e') {
										array[i] = original;
									}
					} else {
						array[i] = letters[j - 5];
						if (array[i] === 'c' || array[i] === 'o' || array[i] === 'd' || array[i] === 'e') {
										array[i] = original;
									}
						}
						
				} else if (array[i] === 'c' || array[i] === 'o') {
						original = array[i];
						if (j - 1 < 0) {
							number = (letters.length - 1) - (j - 1) ;
							array[i] = letters[number];
							if (array[i] === 'c' || array[i] === 'o' || array[i] === 'd' || array[i] === 'e') {
										array[i] = original;
									}
						} else {
							array[i] = letters[j - 1];
							if (array[i] === 'c' || array[i] === 'o' || array[i] === 'd' || array[i] === 'e') {
										array[i] = original;
									}
							}
							
					} else if (array[i] === 'd') {
							original = array[i];
							if (j - 3 < 0) {
								number = (letters.length - 1) - (j - 3) ;
								array[i] = letters[number];
								if (array[i] === 'c' || array[i] === 'o' || array[i] === 'd' || array[i] === 'e') {
										array[i] = original;
									}
							} else {
								array[i] = letters[j - 3];
								if (array[i] === 'c' || array[i] === 'o' || array[i] === 'd' || array[i] === 'e') {
										array[i] = original;
									}
								}
								
						} else if (array[i] === 'e') {
								original = array[i];
								if (j - 4 < 0) {
									number = (letters.length - 1) - (j - 4) ;
									array[i] = letters[number];
									if (array[i] === 'c' || array[i] === 'o' || array[i] === 'd' || array[i] === 'e') {
										array[i] = original;
									}
								} else {
									array[i] = letters[j - 4];
									if (array[i] === 'c' || array[i] === 'o' || array[i] === 'd' || array[i] === 'e') {
										array[i] = original;
									}
								}
					
							} else {
									original = array[i];
									if (j + 9 > letters.length - 1) {
										number = (j + 9) - (letters.length - 1)  ;
										array[i] = letters[number];
										if (array[i] === 'c' || array[i] === 'o' || array[i] === 'd' || array[i] === 'e') {
										array[i] = original;
									}
									} else {
										array[i] = letters[j + 9];
										if (array[i] === 'c' || array[i] === 'o' || array[i] === 'd' || array[i] === 'e') {
										array[i] = original;
									}
									}
								}		
			}
		}
	}
	return array.join('');
}


vowelsBack('omar')
//nvva

vowelsBack('matt')
//vvtt
