/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

function isBalanced(char) {
	var char = char.split('');
	var stack = [];
  var types = {
  	'(': ')',
    '[': ']',
  	'{': '}'
  }

  for (var i = 0; i < char.length; i++) {
  	if (char[i] === '(' || char[i] === '{' || char[i] === '[' ) {
    	stack.push(char[i]);
     } else {
       var poped = stack.pop();

       if (char[i] === types[poped]) {
        return true
      };
    }
  }
  
  if (stack.length !== 0) {
  	return false
  };

    return true;
};
