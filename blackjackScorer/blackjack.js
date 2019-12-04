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

var blackJack = function(hand) {
    let score = 0;
    let scoring = {
        'A': [1, 11],
        'J': 10,
        'Q': 10,
        'K': 10,
    }
    // Count how many ACE on hand
    let countOfAce = hand.filter((card)=>card === 'A').length;

    // Check the cards on hand and count score
    hand.forEach((card)=>{
        // If card was ACE and count is less than two count it as 11
        //  Else count it as 1
        if (card === 'A') {
            if (countOfAce < 2) {
                score += scoring[card][1];
            } else {
                score += scoring[card][0];
            }
        } else if (card === 'J') {
            score += scoring[card];
        } else if (card >= 2 && card <= 10) {
            score += parseInt(card);
        }
    }
    );
    return score;
}
