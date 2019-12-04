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

function Q1(arr) {
	var res = 0;

	if (arr.length === 1 && arr[0] === 'A') {
		return 11;
	}

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 'J' || arr[i] === 'Q'|| arr[i] === 'K') {
			res += 10;
		} else if (arr[i] === 'A') {
				res += 1;
			} else {
				var int = parseInt(arr[i], 10)
					res += int;
			}
	}
	return res;
}

//  i couldn't solve the 'A' problem, i tried so hard but i failed