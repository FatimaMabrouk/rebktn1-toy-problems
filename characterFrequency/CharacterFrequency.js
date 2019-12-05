/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

function characterFrequency(str) {
	var obj = {};
	var result = [];

	for (var i = 0; i < str.length; i++) {
		if(!obj.hasOwnProperty(str[i])){
			obj[str[i]] = 1;
		}else {
			obj[str[i]] += 1;
		}
	}

	var keys = Object.keys(obj);

	for (var i = 0; i < keys.length; i++) {
		var max = keys[i];
		var ind = i
		for (var j = 0; j < keys.length; j++) {
			if(obj[keys[j]] > obj[max]) {
				max = keys[j];
				ind = j;
			}
		}
		result.push([max, obj[max]]);
		obj[max] = 0;
	}

	return result;
}