/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
	obj={
		'(':1,
		')':-1
	}
var p=0
var val=0
	for (var i = 0; i < str.length; i++) {
		if(obj[str[i]] !== undefined  ) {
         p = p + obj[str[i]]
		}
	}
	if(p === 0) return true
		return false
};
