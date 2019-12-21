// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.
//it didn't return the new values .. i don't know where is my fault exactly , because i think i set all the conditions 
function vowelBack(string){
  const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const consonants = ['b','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  const vowel = ['a','i','u']
    var string1 = string.split('');

  for (var i = 0; i < string.length; i++){
  	if (string.includes(consonants)){
  		let next = alphabets[i + 9]
  		
  		if(string[i] === 'c'){
  			return string1[i] = alphabets[i - 1];
  		}
  		if(string[i] === 'd'){
  			return string1[i] = alphabets[i - 3];
  		}
  		if (string[i] === 'z'){
  			return string1[i] = alphabets[0 + 9] ; 
  		}
  		return string1[i] = next;
	 } 
   if ( string.includes (vowel)){
   		let next = alphabets[i - 5] 
   		if(string[i] === 'o'){
  			return string1[i] = alphabets[i - 1];
  		}
  		if(string[i] === 'e'){
  			return string1[i] = alphabets[i - 4];
  		}
        return string1[i] = next; 
   }
}
	return string1.join('') ;
}

