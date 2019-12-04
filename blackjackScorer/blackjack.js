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


["2", "3", ..., "10", "J", "Q", "K" , "A"]

function blackJack (array){
	  var acc;
	  var countAces = 0;
	array.forEach(function(element, i){
		if(element === 'K' || element === 'Q' || element === 'J'){
			array[i] = 10;
		} else if (element !== 'A'){
		          array[i] = Number(element);
		} else {
			countAces++
			array[i] = 1;
		}
	});

    acc =  array.reduce(function(result, element){
        return result + element; 
    }); 

   if( acc + 10 <= 21 && countAces > 0){
         acc = acc + 10;
   }
   return acc;
};


