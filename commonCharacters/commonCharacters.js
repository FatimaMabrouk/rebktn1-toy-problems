/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
//check in the character existe just one time
//if character in string1 = character string2 return string = character
var tab = {};
var tab2 = {};
var result = '';
  for (var i = 0; i < string1.length; i++) {
	  var character = string1[i];
	  
		if(!tab[character]) {
			tab[character] = 1;
		}
		else {
			tab[character]++;
		}
	}

	for (var j = 0; j < string2.length; j++) {
	  var character2 = string2[j];
	  
		if(!tab2[character2]) {
			tab2[character2] = 1;
		}
		else {
			tab2[character2]++;
		}
	}
	for(var key in tab){
		for(var key2 in tab2) {
			if(tab2[key2] === 1 && tab[key] === 1) {
				if(Object.keys(tab) = Object.keys(tab2) ) {
					result += key;
				}
			}
		}
	}	
	return result;
};