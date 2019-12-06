// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

function vowels(string){
	var result = [];
	const alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	for(var i =0; i < string.length; i++){
		switch(string[i]){
			case 'c':
			case 'o' : result.push(alphabet[alphabet.indexOf(string[i]) - 1]);
			break;
			case 'd' : result.push(alphabet[alphabet.indexOf(string[i]) - 3]);
			break;
			case 'e' : result.push(alphabet[alphabet.indexOf(string[i]) - 4]);
			break;
			case 'a' :
			case 'i' :
			case 'u' :
			case 'y' : {
				var diff = alphabet.indexOf(string[i]) - 5;
				console.log(diff)
				if(diff < 0){
					result.push(alphabet[ alphabet.length + diff]);
				}else{
				result.push(alphabet[diff]);}
			}
			break;
			default:{
				var sum = alphabet.indexOf(string[i]) + 9;
				if(sum >= alphabet.length){
				  result.push(alphabet[sum - alphabet.length]);
				}
				else{result.push(alphabet[alphabet.indexOf(string[i]) + 9])}
			} 
		}
	}
	
	for( let i =0; i < result.length; i++){
		if(result[i] === "c" || result[i] === "o" ||result[i] === "d" ||result[i] === "e"){
			result[i] = string[i];
		}
	}
	return result.join(""); 
}