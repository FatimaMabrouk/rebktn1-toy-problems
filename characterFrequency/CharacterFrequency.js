/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

var characterFrequency = function(str){
	var array = [];
	var result1 = [];
	for(var i = 0; i < str.length; i++) {

		if(!array.includes(str[i])) {
			array.push(str[i])
			var count = 0;
			for(var j = i; j < str.length; j++){
			  
			  if(str[i] === str[j]) {
			  	count +=1;
			  }	
			} 
			result1.push([str[i], count]);
		}
			 
	}

	return result1;
}