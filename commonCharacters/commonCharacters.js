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
  //create a holder for the strings
  var mem ={};
  //append chars from string 1 to it
  for (var i = 0; i < string1.length; i++) {
  	mem[string1[i]] = 1;
  	//console.log(mem);
  }
  //append chars from string 2 to it 
  for (var i = 0; i < string2.length; i++) {
  	//check if key already there make it ++
  	if(mem[string2[i]]){
  		mem[string2[i]]++;
  		console.log(mem);
  	}
  	//else ignore it
  }
  //loop and return all keys bigger than 1
  	return mem;
// 	Object.entries(mem).forEach(([key, value]) => {
// 		if(value > 1)
// 		 return key;
// });

};
