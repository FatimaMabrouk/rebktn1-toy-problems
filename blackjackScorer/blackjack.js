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

	// array = argument.split('')
	var result = 0;
	array.forEach(function (one,i) {
		if (one === 'Q' || one === 'K' || one === 'J') {
			array.splice(i,1,parseInt(10))
		} 
		if (one === 'A') {
			if (array.length < 3) {
				array.splice(i,1,parseInt(11))
			}else{
				array.splice(i,1,parseInt(1))
			}
		}
		
	})
	array.forEach(function(one,i){
		array.splice(i,1,parseInt(one))
	})

	result = array.reduce(function(elem,acc){
		return acc += elem	
	},0)
	
	return result
}