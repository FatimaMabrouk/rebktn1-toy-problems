// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.         
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z'];
var vowels = ['a', 'e', 'i', 'o', 'u'];
var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function vowlesBack(str){
	var string = '';
 for(var i = 0; i < str.length; i++){
 	if(str[i] === 'c' || str[i] === 'o'){
 	  var character = alphabets.indexOf(str[i]) - 1;
 	  string += alphabets[character];
 	}
 	else
 	 if(str[i] === 'e'){
 	    var character = alphabets.indexOf(str[i]) - 3;
 	    string += alphabets[character];
 	}
 	else 
 		if(str[i] === 'd'){
 	    var character = alphabets.indexOf(str[i]) - 4;
 	    string += alphabets[character];
 	}

   else 
   	if(consonants.includes(str[i])){
  	   var character = alphabets.indexOf(str[i])
  	   character += 9;
  	if(character >= alphabets.length){
  	   character = character - alphabets.length;
  	}
  	if(alphabets[character] == 'c' || alphabets[character] == 'o' || alphabets[character] == 'd' || alphabets[character] == 'e'){
  		string += str[i]
  	} else {
  		string += alphabets[character];
  	}
  	  }
   if(vowels.includes(str[i]) && str[i] !== 'o'){
  	var vowle = alphabets.indexOf(str[i]);
  	vowle -= 5;
  	if(vowle < 0){
  	vowle = alphabets.length + vowle; 
  	}
  	string += alphabets[vowle];
  
 	}
 
  }
 	return string;
}


          
  	
 
 
                    