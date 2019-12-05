/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/
var characterFrequency = function (string) {
debugger;
var  ResultArr;
 ResultArr  = string.slice().split('').map(function (element, index, array) {
		var counter  = 1;
		for (var i = 0; i < array.length; i++) {
			if (element === array[i]) {
				array.splice(i,1);
				counter++;
			}	
		}
			if(array.length===1) {return [array[0], 1]} 
		array.splice(0,1);
	
		return [element, counter]
	});
return ResultArr.forEach(function (val, index) {
//bubble sort
});
}
characterFrequency("aaabbc");