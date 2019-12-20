/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
	var right = '';
	var left = '';
	for (var i = 0; i < str.length; i++) {

		if(str[i] ===')'){
			right+=str[i];

		}else if(str[i] === '('){
			left +=str[i];
		}
	}
	if(right.length !== left.length || str[0] === ')'){
		return false;
	}
	return true;
};
isBalanced(")(50)(")