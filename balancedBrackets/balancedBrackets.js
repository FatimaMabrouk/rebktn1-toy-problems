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
	var result = [];
	var temp;
	var count = 0;

	for (var i = 0; i < str.length; i++) {
        temp = pbs(str[i]);
		if(temp === 0){
			result.push(str[i])
			result = result.reverse();
		}
		else if(temp ===1){

			if(rever(str[i]) === result[count++]){

				result = result.slice(count-1,result.length-1);

				if(result.length === 0) return true;
			}
			else{
               return false;
			}
		}
	}
	if(result.length > 0) return false;

};
var pbs = function(sign){
	switch(sign){
		case '(': '[': '{': return 0; break;
		case ')': ']': '}': return 1; break;
	}
}
var rever = function(sign){
	switch(sign){
		case ']':  return '['; break;
		case ')':  return '('; break;
		case '}':  return '{'; break;
	}
}