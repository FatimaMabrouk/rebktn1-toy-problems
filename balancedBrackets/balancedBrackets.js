/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {

	var paranthesis = 0, curly = 0, square = 0;

	var open ={"{":0, '(':0, '[':0};

	for (var i = 0; i < str.length; i++) {
	 	if(str[i] === '{' || str[i] === '(' || str[i] === '['){
	 		curly++;
	 	}
	    if(str[i] === '}' || str[i] === ')' || str[i] === ']'){
	 		curly--;
	 	}
	 }

	if(curly > 0){
	 	return false;
	 }
	 return true;
};
