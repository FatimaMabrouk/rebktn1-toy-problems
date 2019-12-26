

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


//lenght * length -1

//(ab) 2 
//(abc) 6
//(abcd) 24 
//factorial string.length IS the limit


var allAnagrams = function(string) {

	//======Recursion Function======\\
	function factorial(n) {
		if(n === 0) return 1;
		return n * factorial(n -1); 
	}

	var limit = factorial(string.length);
	var obj = {}; //for unique values

	while(Object.keys(obj).length !== limit) {
		var anag = '';
		for(var i = 0; i < string.length; i++) {
			anag += string[Math.floor(Math.random() * 3)];
		}
		obj[anag] = anag;//to get unique values.
	}
	console.log(Object.keys(obj));
};

allAnagrams('abcd')
/*
[
  'cabc', 'caac', 'cbcb',
  'bbac', 'caaa', 'cbaa',
  'acac', 'ccbb', 'cbcc',
  'bcaa', 'bcab', 'cccb',
  'acbb', 'baac', 'baab',
  'baca', 'cbca', 'bbab',
  'acab', 'bbca', 'bbcb',
  'bacb', 'caab', 'cbac'
]
*/