// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.


var vowelsBack = function(string) {
	//make alphabet array / vowels array / consonant array
	var vowels = ["A","E","I","O","U"];
	var consonant = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];
	var aplhaArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var result = []

	//check if it's consonant
	for (var i = 0; i < string.length; i++) {
		for (var j = 0; j < consonant.length; j++) {
			if(string[i].toUpperCase() === consonant[j]){
				// find it's place in alhpabet array
				var indexInAlpha = 0;
				for (var x = 0; x < aplhaArray.length; x++) {
					if(string[i].toUpperCase() === aplhaArray[x])
						indexInAlpha = x;
				}
				//before moving + 9 let's make sure we will not excced the array limit of the alphatbet
				//if so we adjust the i based on whats required
				if(indexInAlpha+9 > aplhaArray.length)
				{
					var totalToAdd = 9;
					var diff = aplhaArray.length - 9
					totalToAdd = totalToAdd - diff
					indexInAlpha = totalToAdd;
				}
				//if not we increase the i with 9
				else{
					indexInAlpha = indexInAlpha + 9;
				}
			// push it to result array
			result.push(aplhaArray[indexInAlpha])	
			}
		}
	}

	//check if it's a vowel
	for (var i = 0; i < string.length; i++) {
		for (var j = 0; j < vowels.length; j++) {
			if(string[i].toUpperCase() === vowels[j]){
				// find it's place in alhpabet array
				var indexInAlpha = 0;
				for (var x = 0; x < aplhaArray.length; x++) {
					if(string[i].toUpperCase() === aplhaArray[x])
						indexInAlpha = x;
				}
				//before moving - 5 let's make sure we will not excced the array limit of the alphatbet
				//if so we adjust the i based on whats required
				if(indexInAlpha-5 < 0)
				{
					
					var diff = indexInAlpha - 5
					var totalToAdd = aplhaArray.length + diff
					indexInAlpha = totalToAdd;
				}
				//if not we decrease the i with 5
				else{
					indexInAlpha = indexInAlpha - 5;
				}
			// push it to result array
			result.push(aplhaArray[indexInAlpha])	
			}
		}
	}
	return result;
}