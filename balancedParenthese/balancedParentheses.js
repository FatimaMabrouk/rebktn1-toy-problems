/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
	var count = 0 ; 

	for (i = 0; i < str.length; i++) {
		if (count > 0) {
			return false
		}
		if (str[i] === '('){
			count = count +1;
		}
		if (str[i] === ')') {
			count = count - 1; 
		}
		
	}
	if (count === 0) {
		return true;
	} 
	return false 
};
