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
	var arr=str.split('');
	for(var i=0;i<arr.length;i++) {
		if(arr[i]==='(') {
			for(var j=i+1;j<arr.length;j++) {
				if(arr[j]===')') {
					arr[i]=' ';
					arr[j]=' '
				}
				else if(arr[j] ==='{') {
					for(var k=j+1;k<arr.length;k++) {
						
					}
				}
			}
		}
	}
};
