// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

function vowelsback(string) {
	var vowel = {a:'a', i:'i', u:'u'}    //exception are o:'o' ,e:'e'
	letter = {1:'a', 2:'b', 3:'c', 4:'d', 5:'e', 6:'f', 7:'g', 8:'h', 9:'i', 10:'j', 11:'k', 12:'l', 13:'L', 14:'m', 15:'n', 16:'o', 17:'p', 18:'q', 19:'r', 20:'s', 21:'t', 22:'u', 23:'v', 24:'w', 25:'x', 26:'y', 27:'z'}
	var arr = string.split('')

	for (var i = 0; i < arr.length; i++) {
		//if vowel go back 5
		if(arr[i]=== vowel[arr[i]]){
		
			arr[i] = String.fromCharCode(arr[i].charCodeAt() - 5)
			console.log('after //a->z')

		}
		//if charchter  o,c back 1
		else if(arr[i]=== 'o' || arr[i]=== 'c'){
			arr[i] = String.fromCharCode(arr[i].charCodeAt() - 1)
		} 
		// if d go back 3
		else if(arr[i]=== 'd') {
			arr[i] = String.fromCharCode(arr[i].charCodeAt() - 3)
		}
		//if e go back 4
		else if(arr[i]=== 'e') {
			arr[i] = String.fromCharCode(arr[i].charCodeAt() - 4)
		}
		else {

			if(arr[i].charCodeAt() === 123){
			  arr[i] = 'a'	
			}
			if(arr[i].charCodeAt() === 96){
			  arr[i] = 'z'	
			}
		arr[i] = String.fromCharCode(arr[i].charCodeAt() + 9)
		}
	}
	
return arr

}

//'a'.charCodeAt() = 97
//'z'             = 122