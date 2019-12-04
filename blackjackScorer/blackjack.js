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
<<<<<<< HEAD
["5", "4", "3", "2", "A", "K"]  ==>  25 */


//14+1+10

//if arr[0]==="A" && no other A in the string => A=

var Blackjack = function(arr) {
	var score = { 1:1, 2:2, 3:3 ,4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, A:1, J:10, K:10, Q:10 }
	var result = 0;
	var countA = 0
	if(arr[0] =='A' && arr.filter(e => e=="A").length < 2){	
		score["A"] = 11
	}
	for (var i = 0; i < arr.length; i++) {
			result += score[arr[i]]					
	}
	return result
}
=======
["5", "4", "3", "2", "A", "K"]  ==>  25 */
>>>>>>> da99b9d95ed0c47f9806ea75b0069a51ef9eb025
