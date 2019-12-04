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
 *///
//===Basic Solution==//
var commonCharacters = function(string1, string2) {
//assigning a string.
  var dupstr = '';
  //iterate string1
  for (var i = 0; i < string1.length; i++) {
  	// lockup for the character in string2
  	var index = string2.indexOf(string1[i]);
  	//if exist ? 
  		if (index >=0) {
  			//add it .
  			dupstr += string2[index]
  	}
  }
  return dupstr;
};
//====Solution With Credits=====//
var commonCharacters = function(string1, string2, string3) {
//assigning a string.
  var dupstr = '';
  //iterate string1
  for (var i = 0; i < string1.length; i++) {
  	// lockup for the character in string2
  	var index = string2.indexOf(string1[i]);
  	// lockup for the character in string3
  	var index1 = string3.indexOf(string1[i]);
  	//if all exist ? 
  		if (index >=0 && index1 >=0) {
  			//add it .
  			dupstr += string3[index1]
  	}
  }
  return dupstr;
};