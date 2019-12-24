/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/


// I used two for loops one to check for the Brackets and one to check if they are Balanced or not 


var isBalanced = function(str) {
	var counter = 0;
	var string = '';
	for (var i = 0; i < str.length; i++) {
		if ( str[i] === '{' || str[i] === '(' || str[i] === '[' ) {
			string += str[i];
		}
		if ( str[i] === '}' || str[i] === ')' || str[i] === ']' ) {
			string += str[i];
		}
	}
	for (var i = 0; i < string.length; i++) {
		if (string[i] === '(' && string[(string.length - 1) - i] === ')') {
			counter++;
		}
		else if (string[i] === '[' && string[(string.length - 1) - i] === ']') {
			counter++;
		}
		else if (string[i] === '{' && string[(string.length - 1) - i] === '}') {
			counter++;
		}
		else {
			counter--;
		}
	}
	if (counter !== 0) {
		return false;
	}
	return true;
};


isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false