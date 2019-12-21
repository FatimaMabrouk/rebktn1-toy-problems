/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
    var openingPar = 0;
    var closingPar = 0;

    for (let i = 0; i < str.length; i++) {
        if(str[i] === "(") openingPar += 1;
        if(str[i] === ")") closingPar += 1;
        
    }

    return closingPar === openingPar
};
