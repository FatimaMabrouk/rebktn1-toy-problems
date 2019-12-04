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
  var res = "";
  var  obj = {};
  var arr1 = string1.split("");
  var arr2 = string2.split("");
  arr1.forEach(function(element,i){
 	obj[element] = 1;	
  })
  arr2.forEach(function(element1,i){
  	if(obj[element1] > 0 ){
  		obj[element1]++;
  	}
  	else{
  		obj[element1]=1
  	}
  })
 for(var key in obj){
 	if(obj[key]>1){
 		res+=key
 	}
 }
return res


  
};
