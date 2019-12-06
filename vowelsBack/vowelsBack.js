// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.	

var alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var consonant = ["b", "c", "d", "f", "g", "h",  "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var vowels = ["a", "e", "i", "o", "u"];




function jargon(str) {
	var result = '';
	var trans;
	str = str.toLowerCase();

	for(var i = 0; i < str.length; i++) {
		if( consonant.includes(str[i]) ) { 
			
				if( (alph.indexOf( str[i] ) +9) < alph.length ) {
					str += alph[alph.indexOf( str[i] )+9];
				} else {
					var countC = 9 - ( (alph.length-1) - alph.indexOf( str[i] ) ); //r --> a
					str+= alph[countC];
				}

		}else {
			if( (alph.indexOf(str[i]) -5) >= 0) {
console.log('hi')
				str += alph[alph.indexOf( str[i] )-5];
			} else {
				var countV = 5 -  ( alph.indexOf(str[i]) );
				str+= alph[alph.lenght - countV];
			}
		}
	}
return result;

}