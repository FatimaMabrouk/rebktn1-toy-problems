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

function characterFrequency(str) {
	var string = str.split('')
	var array = [];
	var no = 0;
	var char;
	var count = 0;
	var newArr = [];

	for (var i = 0; i < string.length; i++) {
		char = string[no];
		for (var j = 0; j < string.length; j++) {
			if (char === string[j]) {
				count++;
				no++;
				// console.log(newArr)
			}
		}
				newArr.push(char, count);
				console.log(char)
				array.push(newArr)
				count = 0;
	}

	return array
}

// half way correct except the undefined i tried to solve it but i couldnt
=======
*/
>>>>>>> 269a3ee75c6d59550b6ccccaefaa5cb33683dbdd
