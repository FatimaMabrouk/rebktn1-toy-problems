/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
  var right = 0;
  str.replace(/[\(]/g, ()=>{right++})
  var left = 0;
  str.replace(/[\)]/g, ()=>{left++})
  return right == left;
};
