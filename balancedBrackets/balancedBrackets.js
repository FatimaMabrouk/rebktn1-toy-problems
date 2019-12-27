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
		var count1 = 0 ; 
		var count2 = 0 ; 
		var count3 = 0 ; 
	for (i = 0; i < str.length; i++) {
		if (count1 < 0) {
			return false
		}
		else if (str[i] === '('){
			count1 = count1 +1;
		}
		 else if (str[i] === ')') {
			count1 = count1 - 1; 
		}
		if(count2 < 0 ) {
			return false
		}
			else if (str[i] === '{'){
			count2 = count2 +1;
		}
		 else if (str[i] === '}') {
			count2 = count2 - 1; 
		}	
				if(count3 < 0 ) {
			return false
		}
			else if (str[i] === '['){
			count3 = count3 +1;
		}
		 else if (str[i] === ']') {
			count3 = count3 - 1; 
		}	
	}
	if(count1  === 0 && count2 ===0 && count3 ===0) {
		return true
	}
	return false
};

// previous solution last exemple didn't work so i'm trying another solution :
var isBalanced = function(str) {
	var arr = str.split('');
	var refArray= [];
	var params = {
		'{':'}',
		'[':']',
		'(':')'
	};
	for(var i = 0 ; i < arr.length ; i++) {
		for(var j = 0 ; j < arr.length; j++){
			if(arr[i] in params) {								//if arr[i] eqaual to any key in params we push his value to refArray
				refArray.push(params[arr[i]])				
			if(arr[i] === refArray[j]){			// if arr[i] equal to the element in refArray that represent the closing tag we delete it 
				refArray.pop()
			}
		}
	}
}
if(refArray.length === 0) {         // if all the elemnts are deleted from refArray that means that it's balanced
	return true
}
return false
}