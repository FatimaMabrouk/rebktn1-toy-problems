// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'.
// For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]
var vowels= ["a","e","i","o","u"]

function moveLetter(letter) {
	if(consonants.includes(letter)) {
		if(letter==="c") {
			 return  "b"
		}
		else if(letter ==="d") {
			return  "a"
		}
		else {
			if(alphabet.indexOf(letter)+9 > 25) {
				return alphabet[9-(25- alphabet.indexOf(letter))]
			}
			else {
				return alphabet[alphabet.indexOf(letter)+9]
			}
		}

	}
	else if(vowels.includes(letter)) {
		if(letter==="o") {
			 return  "n"
		}
		else if(letter ==="e") {
			return  "a"
		}
		else {
			if(alphabet.indexOf(letter)-5 < 0) {
				return alphabet[25- alphabet.indexOf(letter)-5]
			}
			else {
				return alphabet[alphabet.indexOf(letter)-5]
			}
		}

	}
}


function playWithString(string) {
	var result = ""
	for(var i= 0;i<string.length;i++) {
		if(!['c', 'o', 'd', 'e'].includes(moveLetter(string[i]))) {
			result += moveLetter(string[i])
		}
		else {
			result += string[i]
		}
	}
	return result;
}