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
	var finalArr = [];
	var semiFinalArr = [];

	for (var i = 0; i < string.length; i++) {
		var char = string[i];
		var count = 0;
		for (var j = 0; j < string.length; j++) { 
			if(string[j] === string[i]) {
				count++;
			}	
		}

		semiFinalArr.push([string[i], count])
	}
	
	function biggest(arrOfArrs) {
		var big = 0;
		for (var i = 0; i < arrOfArrs.length; i++) {
		 	if(arrOfArrs[i][1] > big) {
		 		big = arrOfArrs[i][1];
		 	}
		} 
		return big;
	}

	for (var i = 0; i < semiFinalArr.length; i++) {
		var elm = semiFinalArr[i];
		var 
		
	}
}