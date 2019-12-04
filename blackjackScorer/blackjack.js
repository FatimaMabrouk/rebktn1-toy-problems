/* Complete the function that determines the score of a hand in the card game Blackjack (aka 21).

The function receives an array of strings that represent each card in the hand
("2", "3", ..., "10", "J", "Q", "K" or "A") and should return the score of the hand (integer).
Scoring rules:

Number cards count as their face value (2 through 10). Jack, Queen and King count as 10.
An Ace can be counted as either 1 or 11.

Return the highest score of the cards that is less than or equal to 21.
If there is no score less than or euqal to 21 return the smallest score more than 21.
Examples

["A"]                           ==>  11
["A", "J"]                      ==>  21
["A", "10", "A"]                ==>  12
["5", "3", "7"]                 ==>  15
["5", "4", "3", "2", "A", "K"]  ==>  25 */


function gameBlackjack(array) {
	//for array.length
	//if array[i] = 2 => result += 2
	//case A if(result <= 10) result += 11 else result += 1

	//array = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
	var result = 0;
	for(var i = 0; i < array.length; i++){

		switch(array[i]) {
			case "2":
			result += 2;
			break;

			case "3":
			result += 3;
			break;
				
			case "4":
			result += 4;
			break;

			case "5":
			result += 5;
			break;

			case "6":
			result += 6;
			break;

			case "7":
			result += 7;
			break;

			case "8":
			result += 8;
			break;

			case "9":
			result += 9;
			break;

			case "10":
			result += 10;
			break;

			case "J":
			result += 10;
			break;

			case "Q":
			result += 10;
			break;

			case "K":
			result += 10;
			break;

			case "A":

            if(result <= 10) {
                result += 11;
            }
            else if(result > 10){
                result+= 1;
            }			
			
			break;
		}
	}
	
    if(result <= 21){
    	return result;
    }
	else {
		return "result > 21";
    }
}