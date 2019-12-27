/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
 var  result = [];

  var nest=function  (el='',nb = string.length-1){
 	for (var i = 0; i < string.length; i++) { 
 		if(nb === 0) {
 		 result.push( el + string[i] )	
 		}else{
 		   el = el + string[i]	
		   nb--;
 		   nest(el, nb)
 		
 	   } 
 	}
 }

nest()
 return result
};
