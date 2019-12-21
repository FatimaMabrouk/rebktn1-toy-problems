/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().
isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {

	var isBalanced = function(str) {

    var left =[]
    var right =[]

    for(var i = 0;i<str.length;i++){
        if(str[i] ==="(")
        {
            left.push(str[i])
        }
         if(str[i] ===")")
        {
            right.push(str[i])
        }
    }
    if(left.length != right.length)
    {
        return false;
    }
    return true;
};

};