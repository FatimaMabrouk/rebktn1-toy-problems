/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
<<<<<<< HEAD
*/
var charachterFrequency = function(string){
	var result = [];
	var obj = {};

	for(var i = 0 ; i < string.length; i++){
		var count = 0;
		for(var j = 0; j < string.length; j++){
		  if(string[i] === string[j]){
			count += 1
			//console.log("passed", count)
			obj[string[i]] = count;
		  }
			
		}		
	}
	var keys = Object.keys(obj);
	var values = Object.values(obj);
	for(var key in obj){
		var index = values.indexOf(Math.max(...values))
		result.push([keys[index], Math.max(...values)])
		values.splice(index, 1)
		keys.splice(index, 1)
	}
	return result;
}
=======
*/
>>>>>>> 632900277eef9939715ba7b58d49cca1b3253a86
