/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/


// I tried to loop through the string and count the frequency if the letters and push them into an array and return a sorted array.


function characterFrequency(string) {
	var array = [];
	var counter = 0;
	var arr = string.split('');

	for (var i = 0; i < arr.length; i++) {
		counter = 0;
		for (var j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				counter++;
			}
			if (counter > 1) {
				arr
				delete arr[i];
			}
		}
	}
	var str = '';
	str += arr.join('')
	var arr2 = str.split('');

	for (var i = 0; i < string.length; i++) {
		for (var j = 0; j < string.length; j++) {
			if (string[i] === string[j]) {
				counter++;
			}
		}
		for (var k = 0; k < arr2.length; k++) {
			if (string[i] === arr2[i]) {
				array.push([arr2[i], counter]);
				counter = 0;
			}
		}

	}
	return array.sort();
}


characterFrequency("aaabbc");

characterFrequency("mississippi");