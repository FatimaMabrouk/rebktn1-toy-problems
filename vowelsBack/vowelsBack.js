// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.
function vowelsBack(s) {
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
	var vowels = ['a','e','i','o','u'];
	var r = s
for(var x = 0 ; i < r.length ; x++) {
	if(r[x]==='c' || r[x]=== 'o') {
		r[x]= alphabet[alphabet.indexOf(r[x])-1]
	}
	if(r[x]==='d') {
		r[x]= alphabet[alphabet.indexOf(r[x])-3]
	}
	if(r[x]==='e') {
		r[x]= alphabet[alphabet.indexOf(r[x])-4]
	}
	for(var i = 0 ; i < consonants.length ; i++) {
		if(r[x] === consonants[i]) {
			r[x]= alphabet[alphabet.indexOf(r[x])+9]
		}
	}
	for(var j = 0 ; j < vowels.length ; j++) {
		if(r[x]=== vowels[j]) {
			r[x]= alphabet[alphabet.indexOf(r[x])-5]
		}
	}
}
return r

}