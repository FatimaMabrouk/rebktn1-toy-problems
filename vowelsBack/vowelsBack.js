// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.
function vowelback(alphabetStr) {
	var alphabet = 'abcdefghijkelmopqrstuvwxyz'
	var copyStr = alphabetStr.slice().split('');

	// if (copyStr !== 'code') {
		copyStr.forEach(( elem, index, array) =>{
			switch(elem) {

				case 'a': 
				array[index] = alphabet[alphabet.indexOf('z') - 4]
				break;

				case 'u':
				array[index] = alphabet[alphabet.indexOf('u') - 4]
				break;


				case 'i': 
				array[index] = alphabet[alphabet.indexOf('i') - 4]
				break;

				case 'z': 
				array[index] = alphabet[alphabet.indexOf('a') + 8]
				break;

				case 'c' || 'o': 
				array[index] = alphabet[alphabet.indexOf('c') - 1]
				break;

				case 'o': 
				array[index] = alphabet[alphabet.indexOf('o') - 1]
				break;

				case 'd': 
				array[index] = alphabet[alphabet.indexOf('d') - 2]
				
				break;
			
				case 'e': 
				array[index] = alphabet[alphabet.indexOf('e') - 3]
				break;
				default:
				array[index] = alphabet[alphabet.indexOf(elem) + 8]
			// }
		}
	})
	return copyStr.join('');
}