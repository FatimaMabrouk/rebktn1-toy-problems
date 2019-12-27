/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

	var isBalanced = function(str) {
		var stack = [];
		var bool = false;
	  var types = {
	    '[': ']',
	  	'(': ')',
	  	'{': '}'
	  }

	  for (var i = 0; i < str.length; i++) {
	  	if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
	    	stack.push(str[i]);
	     } else {
	       var poped = stack.pop();

	       if (str[i] === types[poped]) {
	        bool = true
	      };
	    }
	  }
	  
	  if (stack.length !== 0) {
	  	bool = false
	  } else {
	  	bool = true;
	  }
	  return bool
	};
