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
    var arr = [];
    var newArr = [];

	for (var i = 0; i < str.length; i++) {
		var count = 0;

		for (var j = 0; j < str.length; j++) {

			   if(str[i] === str[j]){
               count++;
  
			}
		}
		
		arr.push([str[i],count])
	}
	// for (var i = 0; i < arr.length-1; i++) {
	// 	if(arr[i] === arr[i+1]){
	// 		arr = arr.slice(i+1)
	// 	}
	// }
	
	var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        
        for (var j = i+1; j < arr.length; j++) {

    		if(arr[i][1] < arr[j][1]){
               temp = arr[i][1];
               arr[i][1] = arr[j][1];
               arr[j][1] = temp;
    		}
        	
        }
    }

	return arr;
}