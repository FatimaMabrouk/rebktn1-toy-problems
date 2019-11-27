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
function blackJack(arrayofStrings) {
	debugger;
	var result = 0;
	//iterate over input
 	arrayofStrings.forEach( function(currentValue,index) {
	//check if the element is a number add it's value
	var parsed = parseInt(currentValue);
	if ( typeof(parsed) === 'number') {
			result + parseInt(currentValue);
	//else it's a character add 10
	} else if (parsed === 'K' || parsed === 'J' || parsed === 'Q') {
		result += 10;
	}
	//Ace or A char has specaial pointing score
	else if (parsed === 'A') {
		// there is no number before A ?  score 1
		if (index === 0) {
			 result++;
		// there is a number before A ? score 11;
		} else {
			for (var i = index - 1; i >= 0; i--) {
				var parsed1 = parseInt(arrayofStrings[i])
				if (typeof(parsed1 === 'number')) {
						result += 11;
						break;
				}
			}
		}
	}
});
return result;
}
blackJack(["A"]);blackJack(["A", "J"])
blackJack(["5", "3", "7"])
blackJack(["5", "4", "3", "2", "A", "K"])