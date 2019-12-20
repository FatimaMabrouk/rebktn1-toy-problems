/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
	var regex1 = /[(]/g;
	var regex2 = /[)]/g;
	var open = str.match(regex1);
	var close = str.match(regex2);
	if ( ( ( open.length + 1 ) % 2 === 1 ) && ( ( close.length + 1 ) % 2 === 1) ) {
		return true;
	}else{
		return false;
	} 
}



