/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

 function characterFrequency(str){
 	var obj = {};
 	var result = [];

 	for (var i = 0; i < str.length; i++) {
 		if (!obj[str[i]]){
 			obj[str[i]] = 0
 		}
 		obj[str[i]]++
 	}

 	for (var key in obj) {
 		result.push ([key, obj[key]])
 	}

 	return result
 }