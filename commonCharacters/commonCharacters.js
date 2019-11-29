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



v

var commonCharacters = function(...arguments){
	var acc = '';
	var obj ={};
	// i have to check if a character from string one exist in the all arguemnts
	var str1 = arguments[0]; // first string
	for(var j =0; j < str1.length; j++){ // loop throw first string

	var check = true; // check acc
	for(var i = 1; i < arguments.length; i++){ // loop throw arguments and check
		check = check && arguments[i].includes(str1[j])
	}
	if(check){
		acc = acc + str1[j]; // add to the acc
	}
  }
   // remove duplications
  for(var i = 0; i < acc.length; i++){
   obj[acc[i]] = i;
  }

  return Object.keys(obj).join('');
} 