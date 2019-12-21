/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/
function characterFrequency(string) {
	var frequency = {};
	var result = []
	for(var i = 0 ; i < string.length; i++) {
		if(frequency[string[i]]){
			frequency[string[i]]++
		} else {
			frequency[string[i]] = 1;
		}
	}
	for(var key in frequency){
	 result.push([key,frequency[key]])
	}
function sort() {		
	for(var i = 0 ; i < result.length ; i++) {
		if(result[i][1] - result[i+1][1] < 1) {
			var aux;
			aux = result[i] 
			result[i] = result[i+1]
			result[i+1] = aux
			sort()
		}
	}
}
return result
}