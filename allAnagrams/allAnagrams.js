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
  // Your code here.
  var finalArr = [];

  function factorial(n){
  	if(n===0) {return 1}
  	return n*factorial(n-1)	
  }
  var limit = factorial(string.length);

  function random(array) {
  	var randIndex = Math.floor(Math.random()*array.length);
  	var char = array[randIndex];
  	array.splice(randIndex, 1);
  	return char;
  }

  while(finalArr.length < limit) {
  	var str = ''
  	var arr = string.split('');
  	for (var i = 0; i < string.length; i++) {
  		str += random(arr)
  	}

  	if(!finalArr.includes(str)) {
  		finalArr.push(str)
  	}
  }
  
  return finalArr.sort()
}
