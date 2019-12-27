/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

// All good

var isBalanced = function(str) {
	var brackets = ["(", ")", "{", "}", "[", "]"]
	var string = "" // to store all brackets

	for (var i = 0; i < str.length; i++) {
		if(brackets.includes(str[i])) {
			string += str[i];
		}
	}

	var target = ["()","{}","[]"];
	function recursiveRemove(str) {  //recursive function to remove all balanced brackets
		var count = 0;
		
		for (var i = 0; i < target.length; i++) {
			if(str.includes(target[i])) {
				count++;
				str = str.replace(target[i],"");
			}
		}

		if(count === 0) {return str} // stopping condition for recursion

		return recursiveRemove(str)
	}

	return recursiveRemove(string).length === 0;
};
