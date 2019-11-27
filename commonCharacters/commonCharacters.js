/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication)
 , in the
 * order that they appeared in `a`. Remember to skip spaces and
   characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



 function  commonCharacters(string1, string2) {
  var result = [];
  var i = 0;
  var str1 = string1.split('');
  var str2 = string2.split('');
  for(var i = 0; i < str1.length; i++){
  	for(var j = 0 ; j < str2.length; j++){
  		if(str1[i] === str2[j]){
  			
            // push to new array then useing join();
  			result.push(str1[i]);
  			// console.log(str1[i]);
  		}
  	}
  }
return result.join('');
  
}
