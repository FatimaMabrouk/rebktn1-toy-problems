/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/


// ?? array.sort( function() )


function characterFrequency(str) {

	var array = Array.from(arguments).sort(); // ["i", "i", "i", "i", "m", "p", "p", "s", "s", "s", "s"]
	var result = [];
	var empty = [];
	var count = 0;
	var elem = array[0];
	var arr = array;

/*
//divide the array
//

*/







	while(arr.length >= 0) {                                //!!!!!!!!!!!!!!!!!CRASHES!!!!!!!!!!!!!!!!!!11
			
			if( elem === arr[0] ) { // p === p
				count++;
				arr.shift();
			} else {
				result.push(elem, count);
				empty.push(result); // [[i,3],[m,1]

				elem = array[0]; // p
				count = 1;
			}
	}
	return empty;
}


