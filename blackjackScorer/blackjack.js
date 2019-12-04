/* Complete the function that determines the score of a hand in the card game Blackjack (aka 21).

The function receives an array of strings that represent each card in the hand ("2", "3", ..., "10", "J", "Q", "K" or "A") and should return the score of the hand (integer).
Scoring rules:

Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

Return the highest score of the cards that is less than or equal to 21. If there is no score less than or euqal to 21 return the smallest score more than 21.
Examples

["A"]                           ==>  11
["A", "J"]                      ==>  21
["A", "10", "A"]                ==>  12
["5", "3", "7"]                 ==>  15
["5", "4", "3", "2", "A", "K"]  ==>  25 */

function blackJack(array) {
	var result = 0;
	for (let i = 0; i < array.length; i++ ) {
		if(array[i] === 'J' || array[i] === 'Q' || array[i] === 'K') result += 10
		if(array[i] === '10') result += 10 
		if(array[i] === '9') result += 7 
		if(array[i] === '8') result += 8 
		if(array[i] === '7') result += 7 
		if(array[i] === '6') result += 6 
		if(array[i] === '5') result += 5
		if(array[i] === '4') result += 4
		if(array[i] === '3') result += 3
		if(array[i] === '2') result += 2
		if(array[i] === 'A') {
			var x;
			for (let i = 0; i < array.length; i++ ) {
				if (array[i] === 10) x = 10;
				if (array[i] === 'K') x = 'K';
			}
			if (x === 10 ||x === 'K') {
				result += 1;
			}else {
				result += 11;
			}
		}
	}
	
	return result;
}