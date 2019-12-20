/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

//I created two varibles tom one to check for the right Parenthesis and one for the left Parenthesis and a for loop to check all the elements in the string inside it there are two if conditions to check for the right and left Parenthesis and an if condition outside the for loop to check if the left and right Parentheses are equal it will return true else it will return false
var isBalanced = function(str) {
	var right = 0;
	var left = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] === '(') {
			right++;
		}
		else if (str[i] === ')') {
			left++;
		}
	}
	if ( right === left ) {
		return true;
	}
	return false;
};


isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true