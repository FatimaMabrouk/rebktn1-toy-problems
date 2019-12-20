/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
    // Object  
    let parentheses = {
        '(': 0,
        ')': 0,
    }
    //iteration  O(n) time complexity
    for (var i in str) {
        //if a parenthesis add the parenthesis counter.
        (str[i] === '(') ? parentheses['('] += 1 : "";
        (str[i] === ')') ? parentheses[')'] += 1 : "";
    }
    //  (left number parentheses  =  right number parentheses)?
    return parentheses['('] === parentheses[')'];
  };
  