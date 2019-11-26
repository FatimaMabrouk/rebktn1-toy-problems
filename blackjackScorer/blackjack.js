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

// I created a varible to store the output and return it and used a for loop to loop through the array of strings and some of conditions to check for the possible inputs
// I used the built in function parseInt to change the value if the string numbers to integers.

function blackjack(array) {
	var count = 0;
	for (var i = 0; i < array.length; i++) {
		if (count >= 21) {
		break;
		}
		if (parseInt(array[i]) >= 2 && parseInt(array[i]) <= 10) {
			count += parseInt(array[i]);
		}
		if (array[i] === 'J' || array[i] === 'Q' || array[i] === 'K') {
			count += 10;
		}
		if (array[i] === 'A') {
			if (count + 1 <= 21) {
				count += 1;
			}
			else if (count + 11 <= 21) {
				count += 11;
			}
		}
	}
	return count;
}
blackjack(["A"]);
blackjack(["A", "J"]);
blackjack(["A", "10", "A"] );
blackjack(["5", "3", "7"]);
blackjack(["5", "4", "3", "2", "A", "K"]);