/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

<<<<<<< HEAD
var isBalanced = function(str) {
 var openCount = 0;
 var closeCount =0;  
for(var i = 0; i < str.length; i++ ){
    if(str[i] === '('){ openCount++};
    if(str[i] === ')'){ closeCount++};
}
return openCount === closeCount;
};
=======
var isBalanced = function(str) {};
>>>>>>> 632900277eef9939715ba7b58d49cca1b3253a86
