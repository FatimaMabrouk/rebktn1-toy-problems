// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends 
//this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

function vowelBack(string) {
	var vowel = /[a, e, u, i, o]/;
	var letter = /[a..z]/;
	for(var j = 0; j < string.length; j++) {
		if(string[j] === "c" || string[j] === "o" ) {
			string[j] = letter.indexOf(string[j]) - 1;
		}
		else if(string[j] === "d") {
			string[j] = (letter.indexOf(string[j]) - 3);
		}
		else if(string[j] === "e") {
			string[j] = (letter.indexOf(string[j]) - 4);
		}
		else if(string[j] === "a" || string[j] === "u" || string[j] === "i" ) {
			string[j] = (letter.indexOf(string[j]) - 5);
		}
		else {
			string[j] = (letter.indexOf(string[j]) + 9);
		}
	}
}
