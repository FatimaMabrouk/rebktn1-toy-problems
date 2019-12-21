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
	str = str.toLowerCase();
	var sorted = [];
	var result = [];
	var letters = str.split("");
	var obj = {};
	for(var i = 0; i < letters.length; i++){

		var count = 0 ;
		for(var j = 0; j < letters.length;j++){
			if(letters[i] === letters[j]){
				count++
			}
		}
		obj[letters[i]] = count
	}
	
	//the previous steps is to get and obj with letters as key and repitition number as property;
	for(key in  obj){
		result.push([key,obj[key]])
	}
	return result
	//to get array of arrays with key and value;
	// function sort(result){
	// 	if(result.length === 0){
	// 		return;
	// 	}
	// 	for(var i = 0;i < result.length ; i++){
	// 		if(result[i][1] > result[i+1][1]){
	// 			sorted.push(result[i])
	// 			result.splice(i,1)
	// 		}
	// 		return sort(result)
	// 	}
	// }
	// return sorted

}