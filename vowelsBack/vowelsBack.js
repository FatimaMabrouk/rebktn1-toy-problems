// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

var game=function(str){
var consonants = /[BDCFGHJKLMNPQRSTVXZY]/i;//cD
var specilConsonants = /[cd]/i;//cD

var vowels = /[AEOIU]/i //oE
var specilVowels=/[oe]/
var reverToOriginal = /[code]/ //

var array=str.split('')
var newCharAssci=0;
var newChar='';

for (var i = 0; i < array.length; i++) {

	if(consonants.test(array[i])){
		if(specilConsonants.test(array[i])){
			 if(array[i] === 'c'){
			 		 newCharAssci = array[i].charCodeAt(0) - 1;
			 }
			 if(array[i] === 'd'){
			 	 newCharAssci = array[i].charCodeAt(0) - 3;
			 }
		}else{
		 newCharAssci = array[i].charCodeAt(0) + 9;
  }


	}



if(vowels.test(array[i])){

	if(specilVowels.test(array[i])){
		if(array[i] === 'o'){
			newCharAssci = array[i].charCodeAt(0) - 1;
		}
		if(array[i] === 'e'){newCharAssci = array[i].charCodeAt(0) - 3;}
	}else{
		 newCharAssci = array[i].charCodeAt(0) - 5;
		}

	}


		if(newCharAssci > 122){
			
       newChar=String.fromCharCode((newCharAssci - 122) + 96)
        
		}else{
		if(newCharAssci < 97){
    newChar=String.fromCharCode(( newCharAssci - 97  ) + 123)
		}

		else{
			newChar=String.fromCharCode(newCharAssci)
		}
}


		if(!reverToOriginal.test(newChar)){
		array[i] =  newChar
	}
}
return  array.join('')

}