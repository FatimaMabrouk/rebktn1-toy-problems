/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
	if(str === ""){
		return true
	}
	var parant = [];
	for(var i of str){
		if (i === "(" || i ===")"){
			parant.push(i)
		}
	}
	return parant
};
