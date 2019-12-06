// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.


//Solved - abobker elaghel
function vowelsBack(str){
let resStr = "";
for (let i = 0; i < str.length; i++) {
	currentLetter = str[i];

	switch(currentLetter){

		case 'a':
		case 'e':
		case 'i':
		// case 'o': o is a Exception so it wont revert back 5 places
		case 'u':
		for (let j = 0; j < 5; j++) {
			if(currentLetter === 'a')
				currentLetter = 'z';
			else
				currentLetter =  String.fromCharCode((currentLetter.charCodeAt() - 1));
		}
		break;


		case 'c':
		case 'o':
		currentLetter =  String.fromCharCode((currentLetter.charCodeAt() - 1));
		break;

		case 'd':
		currentLetter =  String.fromCharCode((currentLetter.charCodeAt() - 3));
		break;

		case 'e':
		currentLetter =  String.fromCharCode((currentLetter.charCodeAt() - 4));
		break;



		default:
		for (let j = 0; j < 9; j++) {
			if(currentLetter === 'z')
				currentLetter = 'a';
			else
				currentLetter =  String.fromCharCode((currentLetter.charCodeAt() + 1));
		}
	}


	if(currentLetter === 'c' || currentLetter === 'o' || currentLetter === 'd' || currentLetter === 'e')
		currentLetter = str[i];


	resStr += currentLetter;
}

return resStr;
}
//Solved - abobker elaghel