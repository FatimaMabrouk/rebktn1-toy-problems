// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.
function moveLetters(s){
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var arr = s.split('');
	for (var i = 0; i < arr.length; i++) {
       for (var j = 0; j < alphabet.length; j++) {

       	if(arr[i] === alphabet[j]){

		switch(s[i]){
		case 'c': case 'o': arr[i] = alphabet[j-1]; break;
		case 'd': case 'e': arr[i] = alphabet[0]; break;
        case 'a': arr[i] = alphabet[21]; break;
        case 'z': arr[i] = alphabet[8]; break;
        case 'u': case 'i': arr[i] = alphabet[j-5]; break;
        case 'r': arr[i] = alphabet[0]; break;
        case 's': arr[i] = alphabet[1]; break;
        case 't': arr[i] = alphabet[2]; break;
        case 'v': arr[i] = alphabet[3]; break;
        case 'w': arr[i] = alphabet[4]; break;
        case 'x': arr[i] = alphabet[5]; break;
        case 'y': arr[i] = alphabet[6]; break;
        default: arr[i] = alphabet[j+9]; break; 
	}
       	}
       }
	}
	return arr;
	
}