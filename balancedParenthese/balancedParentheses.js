/*
Balanced Parenthesis
Given a string, return true if it contains
 balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/


/*
var tab = []
var count = 0;
for str.length
str[i] === '(' ? counter ++
str[i] === ')'?  count++;
counter = count? return 'balanced' : return 'not balanced';
*/
var isBalanced = function(str) {
    var count = 0;
    var counter = 0;
    for(var i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            count++;
        }
        else if(str[i] === ')') {
            counter++;
        }
    }
    if(counter === count) {
        return true;
    }
    else {
        return false;
    }
   
};



