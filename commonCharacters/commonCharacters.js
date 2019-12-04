/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('xacexivou', 'xaegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
 var str={}
var result=""
var indexMaxArg=0
var maxArg=arguments[0]
for (var i = 1; i < arguments.length; i++) {
	if(arguments[i].length > maxArg){
     indexMaxArg=i;
	}
}
console.log(arguments)
var s=arguments.splice(indexMaxArg,1);
arguments.unshift(s)

 /*var max=""
 var min=""
 if (string1.length > string2.length) {
 	max=string1;
 	min=string2;
 }else{
 	max=string2;
 	min=string1;
 }

 for (var i = 0; i < max.length; i++) {
 	
 	if(min.indexOf(max[i])!==-1 && max[i]!== " "){
 		str[max[i]] = 1;
 	
 	}
 }

 return Object.keys(str).join("");*/
};
