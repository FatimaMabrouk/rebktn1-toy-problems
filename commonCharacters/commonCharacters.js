/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  
  var obj1 = {}; //Object that will contain all the no repeated characters of string1
  var obj2 = {}; //Object that will contain all the no repeated characters of string2
  var result = "";

  //we check if the two strings don't have the same length
  if (string2.length > string1.length) {
  	[string1, string2] = [string2, string1];
  }

  //with a for loop we fill two object with only the no repeated characters of string1 and string2 without space and comma and collum
  for (var i = 0; i < string1.length; i++){
  	var c1 = string1[i];
  	var c2 = string2[i];
  	if(!obj1[c1] && c1 !== " " && c1 !== "," && c1 !== "."){
  		obj1[c1] = c1;
  	}
  	if(c2 && !obj2[c2] && c2 !== " " && c2 !== "," && c2 !== "."){
  		obj2[c2] = c2;
  	}
  }
  //loop over string1 and check if the current character is found in both strings
  for (var i = 0; i < string1.length; i++) {
  	c = string1[i];
  	if(obj1[c] && obj1[c] === obj2[c]){
  		result += obj1[c];
  		delete obj1[c];
  		delete obj2[c];
  	}
  }

  return result;
};