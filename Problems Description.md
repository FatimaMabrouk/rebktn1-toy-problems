
# Immersive Toy Problems

### First non repeated character
Given an arbitrary input string, return the first nonrepeated character in the string. For example:
```javascript
firstNonRepeatedCharacter('ABA'); // => 'B' 
firstNonRepeatedCharacter('AACBDB'); // => 'C'
```

### Blackjack (aka 21)

Complete the function that determines the score of a hand in the card game **Blackjack** (aka 21).

The function receives an **array** of strings that represent each card in the hand `("2", "3", ..., "10", "J", "Q", "K" or "A")` and should return the score of the hand (integer).

Scoring rules:

 - Number cards count as their face value (2 through 10).
 - Jack, Queen and King count as 10.
 -  An Ace can be counted as either 1 or 11.

Return the highest score of the cards that is less than or equal to 21. 
If there is no score less than or euqal to 21 return the smallest score more than 21.

Examples

```javascript
["A"]                           ==>  11
["A", "J"]                      ==>  21
["A", "10", "A"]                ==>  12
["5", "3", "7"]                 ==>  15
["5", "4", "3", "2", "A", "K"]  ==>  25 
```

### Common Characters
Write a function `f(a, b)` which takes two strings as arguments and returns a string containing the characters found in both strings **(commonCharacters)**, in the order that they appeared in `a`. 

**Remember** to skip spaces and characters you have already encountered!
 
```javascript
Example: commonCharacters('acexivou', 'aegihobu')
Returns: 'aeiou'
 ````
 
  ##### Extra credit: Extend your function to handle more than two input strings.
