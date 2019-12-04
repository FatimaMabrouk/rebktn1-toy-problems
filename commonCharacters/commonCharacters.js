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


// This works for two strings
var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var obj = {};
  var finalStr="";

  for(var i = 0; i < string1.length; i++) {
  	if(string2.indexOf(string1[i]) !== -1) {
  		obj[string1[i]] = true;
  	} else {
  		obj[string1[i]] = false;
  	}
  }

  for(var i = 0; i < string1.length; i++) {
  	if(obj[string1[i]] === true) {
  		finalStr += string1[i]
  	}
  }

  return finalStr;
};


//This works for more strings
var multipleStrArgs = function(...args) {
	//var args = Object.values(arguments);
    var finalStr="";

    for(var i = 0; i < args[0].length; i++) {
    	var count = 0;
    	for(var j = 1; j < args.length ; j++) {
    		if(args[j].indexOf(args[0][i]) !== -1) {
    			count++
    		}
    	}

    	if(count === args.length - 1) {
    		finalStr += args[0][i]
    	}
    }

    return finalStr;
}
