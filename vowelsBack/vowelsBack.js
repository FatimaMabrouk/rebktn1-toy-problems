// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. 
//For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

function vowels(string){
	var reg = /[!@#$%^&*(),.?":{}|<> ]/g
	var vowelsCh = /[eui]/g
	var coTest = /[co]/g
	var azTest = /[az]/g
	var movedLetterTest = /[code]/g
	var newString = string.replace(reg,'')
	var tab = newString.split('')
	//console.log(string)
	var regexVowels = RegExp(vowelsCh)
	var result =""
	for(var i = 0 ; i <tab.length ; i++){
		/*if(tab[i]=== "z" ){
			result += "a"
		}
		if(tab[i]=== "a" ){
			result += "z"
		}*/
		if(tab[i]=== "d" ){
			var code = tab[i].charCodeAt() -3
			var ch = String.fromCharCode(code);
			result += ch
		}
		if(tab[i]=== "e" ){
			var code = tab[i].charCodeAt() - 4
			var ch = String.fromCharCode(code);
			if(!check){
				result += ch	
			}else{
				result += tab[i]
			}
			
		}
		if(tab[i] === "c" || tab[i] === "o" ){
			var code = tab[i].charCodeAt() + 1
			var ch = String.fromCharCode(code);
			if(!check){
				result += ch	
			}else{
				result += tab[i]
			}
		}
		if(!regexVowels.test(tab[i])){
			var code = tab[i].charCodeAt() + 9
			var ch = String.fromCharCode(code);
			if(!check){
				result += ch	
			}else{
				result += tab[i]
			}
		}
		if(regexVowels.test(tab[i])){
			var code = tab[i].charCodeAt() - 5
			var ch = String.fromCharCode(code);
			if(!check){
				result += ch	
			}else{
				result += tab[i]
			}
		}
	}
	return result
}
function check(ch){
	return (ch=== "c" ||ch=== "o" ||ch=== "d" ||ch=== "e")
}