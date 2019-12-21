/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
var open =0 , close =0;
var arr = str.split('')

if(str.length === 0){
	return true
}

for (var i = 0; i < arr.length; i++) {
	console.log(arr[i])
	if(arr[i] === '('){
		open++;
	}
	if(arr[i] === ')'){
		close++
	}
}

if(open === close){
	return true
}
return false

};
