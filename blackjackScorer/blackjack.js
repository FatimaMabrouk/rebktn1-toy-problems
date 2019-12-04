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

var Blackjack = function(array){
	//assuming that we will recive an array with the cards for the hand of the player
	//creat an array to hold all integer values to sum them up at the end
	var toSumArray = [];
	//we loop through the array and check if it's a number between 2-10
for (var i = 0 ; i < array.length; i++) {
	if(Number.isInteger(array[i])){
			if(array[i] > 2 && array[i] < 10){
			// if its int and between the numbers we push it as is
			toSumArray.push(array[i])
			}
	}
			//we check if its jack or qeen or king to push 10
			if(array[i] === "J" || array[i] === "Q" ||  array[i] === "K"  ){
				toSumArray.push(10);
			}
			//if not it must be Ace, before we count ace as 11 we must make sure 
			//the total sum we have didn't excced 21 or we push it as 1 instead
			var currentSum = 0;
			for (var x = 0 ; x < toSumArray.length; x++) {
				if(Number.isInteger(toSumArray[x])){
				currentSum = currentSum + parseInt(toSumArray[x]);
			}
			}
			var checkTotal = 21 - currentSum;
			if(checkTotal <= 10){
				toSumArray.push(11);
			}
			toSumArray.push(1);
}
//at the end we return the total of the hand based on the numbers we have in the sumrray
var result = 0;
for (var i = 0; i < toSumArray.length; i++) {
	result = result + parseInt(toSumArray[i]);
}
return result;

};