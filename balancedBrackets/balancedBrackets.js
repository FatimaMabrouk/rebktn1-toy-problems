/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (),
 curly-brackets {}, and square-brackets [] 
would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {
	if(isBracket(str) && isOpen(str) && isMatched(str)) {
		return "is balanced";
	}
	else {
		return "not balanced";
	}
};
//to see if element is a brackets
var isBracket = function(char) {
	var str = '(){}[]';

	if(str.indexof(char) = -1) {
		return true;
	}
	return false;
}
//if open bracket index > close index => return false 
var isOpen = function(char) {
	var openStr = '({['; 
	var closeStr = ')}]';
	var bracketOpen;
	var bracketClose;
	
	for(var i = 0; i < char.length; i++) {
		bracketOpen = char[i].includes(openStr)
		bracketClose = char[i].includes(closeStr)
		if(indexof(bracketOpen) < indexof(bracketClose)) {
			return true;
		}
		return false
	}
}
//the count matches
var isMatched = function(char) {
	var count = 0;
	var counter = 0;
	
	for(var i = 0; i < char.length; i++) {
		if(char[i] === '(' || char[i] === '{' || char[i] === '[' ) {
			count++
		}
		if(char[i] === ')' || char[i] === '}' || char[i] === ']' ) {
			counter++
		}
	}
	
	if(count === counter) {
		return true;
	}
	return false;

}


