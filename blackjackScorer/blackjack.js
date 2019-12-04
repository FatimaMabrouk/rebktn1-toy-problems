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

var blackjack=function(array){
var score=0;
obj={A:11,
	J:10,
	Q:10,
	K:10
}
aValue=[];
array.forEach(function(element){
	if(element==='A'){
		aValue.push(1);
	}
	score=score +(obj[element] || parseInt(element))
})
for (var i = 0; i < aValue.length; i++) {
if(score > 21){
	 score=score-10;
}
else {break;}
}
return score
}