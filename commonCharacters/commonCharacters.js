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

	var str = "";
 	var index;
 	for (var i = 0; i < string1.length; i++) {
 		
 			index = (string2.indexOf(string1[i]));
 			if(index !== -1){
 				str+= string1[i];
 			}
 	}
return str ;
// extend the function to handle more than 2 input so we will use ES6 
  
};

var commonCharactersEs6 = function(string1,string2, ...strings){
	strings.forEach(function(strings){
	var str = "";
	 	var index;
	 	for (var i of string1) {
	 			index = (strings.indexOf(string1[i]));
	 			if(index !== -1){
	 				str+= string1[i];
	 			}
	 	}
	 	return str ;
	 	});
	
}
